parser grammar NqlParser;

options {
	tokenVocab = NqlLexer;
}

query
:
	logic
	(
		ORDERBY sortTuples += sortTuple
		(
			COMMA sortTuples += sortTuple
		)*
	)?
; //

sortTuple
:
	path sortDirection
; // 

logic
:
	compare # logicCompareExpr //

	| historicalCompare # logicHistoricalCompareExpr //

	| LP inner = logic RP # logicPrecededExpr //

	| NOT inner = logic # logicNotExpr //

	| left = logic op = logicBinaryOp right = logic # logicBinaryExpr //

;

period
:
	BEFORE from = factor
	| AFTER from = factor
	| DURING LP from = factor COMMA to = factor RP
;

historicalCompare
:
	left = factor WAS NOT?
	(
		op = compareOperator
	)? right = factor period # historicalNumericCompareExpr //

	| value = factor WAS NOT? op = stringOperator pattern = factor period #
	historicalStringMatchExpr
	| value = factor WAS NOT? BETWEEN includeLower =
	(
		LP
		| LB
	) lower = factor COMMA upper = factor includeUpper =
	(
		RP
		| RB
	) period # historicalBetweenExpr //

	| value = factor WAS op = collectionOperator collection = factor period #
	historicalCollectionMatchExpr //

;

compare
:
	path NOT? EXISTS # existsExpr
	| left = factor NOT? op = compareOperator right = factor # numericCompareExpr //

	| value = factor NOT? op = stringOperator pattern = factor # stringMatchExpr
	| value = factor BETWEEN includeLower =
	(
		LP
		| LB
	) lower = factor COMMA upper = factor includeUpper =
	(
		RP
		| RB
	) # betweenExpr //

	| value = factor op = collectionOperator collection = factor #
	collectionMatchExpr //

	| ISSUE NOT? IN functionCall # satisfyExpr //

	| NOT? SATISFY functionCall # satisfyExpr
;

factor
:
	raw # rawValueExpr //

	| duration # durationExpr
	| path # pathExpr //

	| LP inner = factor RP # precededExpr //

	| functionCall # functionCallExpr //

	| SUBTRACT inner = factor # mathNegativeExpr //

	| left = factor op = MULTIPLY right = factor # mathBinaryExpr //

	| left = factor op = DIVIDE right = factor # mathBinaryExpr //

	| left = factor op = MOD right = factor # mathBinaryExpr //

	| left = factor op = ADD right = factor # mathBinaryExpr //

	| left = factor op = SUBTRACT right = factor # mathBinaryExpr //

	| LP condition = logic QUESTION pass = factor COLON otherwise = factor RP #
	conditionExpr //

	| LB elements += factor
	(
		COMMA elements += factor
	)* RB # commaListExpr //

;

functionCall
:
	functionName = ID LP
	(
		args += factor
		(
			COMMA args += factor
		)*
	)? RP
;

path
:
	chain += pathElement
	(
		DOT chain += pathElement
	)*
;

pathElement
:
	id = ID //

	| key = KEY //

;

duration
:
	amountMillis = MILLIS // 

	| amountSeconds = SECONDS //

	| amountMinutes = MINUTES //

	| amountHours = HOURS //

	| amountDays = DAYS //

	| amountWeeks = WEEKS // 

;

raw
:
	NULL
	| TRUE
	| FALSE
	| UNSIGN
	| DECIMAL
	| STRING
	| DATE
	| DATETIME
; //

sortDirection
:
	ASC //

	| DESC //

;

stringOperator
:
	MATCH //

	| EXACTLY_MATCH //

	| REGEX_MATCH
;

collectionOperator
:
	IN
	| NOT_IN
;

compareOperator
:
	EQUALS //

	| NOT_EQUALS //

	| GREATER //

	| GREATER_EQUALS //

	| LESS //

	| LESS_EQUALS //

;

logicBinaryOp
:
	AND
	| OR
	//	| XOR 

;

