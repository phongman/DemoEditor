lexer grammar NqlLexer ;

fragment DIGIT: '0' .. '9'; //

fragment ALPHA: 'A' .. 'Z'
	| 'a' .. 'z'; //

fragment YEAR: DIGIT DIGIT DIGIT DIGIT;

fragment MONTH: ('0' [1-9])
	| '1' [0-2];

fragment DAY: [0-2] DIGIT
	| '3' [0-1];

fragment HOUR: [0-1] DIGIT
	| '2' [0-3];

fragment SIXTY_VALUES: [0-5] DIGIT;

fragment MILLISECOND: DIGIT DIGIT DIGIT (DIGIT DIGIT DIGIT)?; //

fragment EXPONENT: ( [eE] [+\-]? DIGIT+); //

UNDERSCORE
	: '_' ;

LP
	: '(' ;

RP
	: ')' ;

LB
	: '[' ;

RB
	: ']' ;

PIPE
	: '|' ;

QUESTION
	: '?' ;

COLON
	: ':' ;

SEMI_COLON
	: ';' ; //

DOT
	: '.' ; //

COMMA
	: ',' ;

AS
	: 'AS'
	| 'as' ; //

TRUE
	: 'TRUE'
	| 'true' ; //

FALSE
	: 'FALSE'
	| 'false' ; //

BETWEEN
	: 'BETWEEN'
	| 'between' ; //

EQUALS
	: '=='
	| '='
	| 'eq' //
	| 'EQ' //
	| 'equals'
	| 'EQUALS' ; //

NOT_EQUALS
	: '!=' //
	| 'neq' //
	| 'NEQ'//
	| 'not equals' //
	| 'NOT EQUALS' //
	; //

GREATER
	: '>' //
	| 'gt' //
	| 'GT' //
	| 'greater' //
	| 'GREATER' //
	; //

LESS
	: '<' //
	| 'lt'//
	| 'LT'//
	| 'less than' //
	| 'LESS THAN' //
	; //

GREATER_EQUALS
	: '>='
	| 'gte' //
	| 'GTE' //
	| 'greater or equals' //
	| 'GREATER OR EQUALS' //
	; //

LESS_EQUALS
	: '<=' //
	| 'lte'//
	| 'LTE'//
	| 'less or equals' //
	| 'LESS OR EQUALS' //
	; //

REGEX_MATCH
	: '~' //
	| 'regex match' //
	| 'REGEX MATCH' ; //

MATCH
	: '=~' //
	| 'match' //
	| 'MATCH' //
	; //

EXACTLY_MATCH
	: '==~'
	| 'match exact' //
	| 'MATCH EXACT' //
	; //

WAS
	: 'was'
	| 'WAS' ; //

DURING
	: 'during'
	| 'DURING' ;

BEFORE
	: 'before'
	| 'BEFORE' ;

AFTER
	: 'after'
	| 'AFTER' ;

NOT
	: 'NOT'
	| 'not' ; //

AND
	: 'AND'
	| 'and' ; //

OR
	: 'OR'
	| 'or' ; //

XOR
	: 'XOR'
	| 'xor' ; //

ADD
	: '+' ;

SUBTRACT
	: '-' ;

MULTIPLY
	: '*' ;

DIVIDE
	: '/' ;

MOD
	: '%' ;

NULL
	: 'null'
	| 'NULL' ;

IN
	: 'in'
	| 'IN' ;

NOT_IN
	: 'not in'
	| 'NOT IN' ;

ORDERBY
	: 'order by'
	| 'ORDER BY' ;

ASC
	: 'asc'
	| 'ASC' ;

DESC
	: 'desc'
	| 'DESC' ;

ISSUE
	: 'issue'
	| 'ISSUE' ;

SATISFY
	: 'satisfy'
	| 'SATISFY' ;

EXISTS
	: 'exists'
	| 'EXISTS' ;

UNSIGN
	: ('0' | [1-9] DIGIT*) ;

DECIMAL
	: ( '0' | [1-9] DIGIT*) (DOT DIGIT+)? EXPONENT? ; //

ID
	: (ALPHA | (UNDERSCORE+ ALPHA) | (UNDERSCORE+ DIGIT)) (ALPHA | UNDERSCORE | DIGIT)* ;

KEY
	: '`' ( '\\`' | '\\\\' | ~[\\`])*? '`' ;

MILLIS
	: UNSIGN 'ms' ;

SECONDS
	: UNSIGN 's' ;

MINUTES
	: UNSIGN 'm' ;

HOURS
	: UNSIGN 'h' ;

DAYS
	: UNSIGN 'd' ;

WEEKS
	: UNSIGN 'w' ;

DATE
	: '\'' YEAR '-' MONTH '-' DAY '\'' ;

DATETIME
	: '\'' YEAR SUBTRACT MONTH SUBTRACT DAY ('T' | ' ') HOUR COLON SIXTY_VALUES (
		COLON SIXTY_VALUES (DOT MILLISECOND)?
	)? '\'' ;

STRING
	: ('"' ( '\\"' | '\\\\' | ~[\\"])*? '"')
	| ( '\'' ( '\\\'' | '\\\\' | ~[\\'])*? '\'') ; //

WS
	: (' ' | '\r' | '\t' | '\n') -> channel(HIDDEN) ;

