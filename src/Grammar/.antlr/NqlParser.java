// Generated from d:\ANTLR\antlr\src\Grammar\NqlParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class NqlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		UNDERSCORE=1, LP=2, RP=3, LB=4, RB=5, PIPE=6, QUESTION=7, COLON=8, SEMI_COLON=9, 
		DOT=10, COMMA=11, AS=12, TRUE=13, FALSE=14, BETWEEN=15, EQUALS=16, NOT_EQUALS=17, 
		GREATER=18, LESS=19, GREATER_EQUALS=20, LESS_EQUALS=21, REGEX_MATCH=22, 
		MATCH=23, EXACTLY_MATCH=24, WAS=25, DURING=26, BEFORE=27, AFTER=28, NOT=29, 
		AND=30, OR=31, XOR=32, ADD=33, SUBTRACT=34, MULTIPLY=35, DIVIDE=36, MOD=37, 
		NULL=38, IN=39, NOT_IN=40, ORDERBY=41, ASC=42, DESC=43, ISSUE=44, SATISFY=45, 
		EXISTS=46, UNSIGN=47, DECIMAL=48, ID=49, KEY=50, MILLIS=51, SECONDS=52, 
		MINUTES=53, HOURS=54, DAYS=55, WEEKS=56, DATE=57, DATETIME=58, STRING=59, 
		WS=60;
	public static final int
		RULE_query = 0, RULE_sortTuple = 1, RULE_logic = 2, RULE_period = 3, RULE_historicalCompare = 4, 
		RULE_compare = 5, RULE_factor = 6, RULE_functionCall = 7, RULE_path = 8, 
		RULE_pathElement = 9, RULE_duration = 10, RULE_raw = 11, RULE_sortDirection = 12, 
		RULE_stringOperator = 13, RULE_collectionOperator = 14, RULE_compareOperator = 15, 
		RULE_logicBinaryOp = 16;
	private static String[] makeRuleNames() {
		return new String[] {
			"query", "sortTuple", "logic", "period", "historicalCompare", "compare", 
			"factor", "functionCall", "path", "pathElement", "duration", "raw", "sortDirection", 
			"stringOperator", "collectionOperator", "compareOperator", "logicBinaryOp"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'_'", "'('", "')'", "'['", "']'", "'|'", "'?'", "':'", "';'", 
			"'.'", "','", null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, "'+'", 
			"'-'", "'*'", "'/'", "'%'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "UNDERSCORE", "LP", "RP", "LB", "RB", "PIPE", "QUESTION", "COLON", 
			"SEMI_COLON", "DOT", "COMMA", "AS", "TRUE", "FALSE", "BETWEEN", "EQUALS", 
			"NOT_EQUALS", "GREATER", "LESS", "GREATER_EQUALS", "LESS_EQUALS", "REGEX_MATCH", 
			"MATCH", "EXACTLY_MATCH", "WAS", "DURING", "BEFORE", "AFTER", "NOT", 
			"AND", "OR", "XOR", "ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", "MOD", "NULL", 
			"IN", "NOT_IN", "ORDERBY", "ASC", "DESC", "ISSUE", "SATISFY", "EXISTS", 
			"UNSIGN", "DECIMAL", "ID", "KEY", "MILLIS", "SECONDS", "MINUTES", "HOURS", 
			"DAYS", "WEEKS", "DATE", "DATETIME", "STRING", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "NqlParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public NqlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class QueryContext extends ParserRuleContext {
		public SortTupleContext sortTuple;
		public List<SortTupleContext> sortTuples = new ArrayList<SortTupleContext>();
		public LogicContext logic() {
			return getRuleContext(LogicContext.class,0);
		}
		public TerminalNode ORDERBY() { return getToken(NqlParser.ORDERBY, 0); }
		public List<SortTupleContext> sortTuple() {
			return getRuleContexts(SortTupleContext.class);
		}
		public SortTupleContext sortTuple(int i) {
			return getRuleContext(SortTupleContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(NqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(NqlParser.COMMA, i);
		}
		public QueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query; }
	}

	public final QueryContext query() throws RecognitionException {
		QueryContext _localctx = new QueryContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_query);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(34);
			logic(0);
			setState(44);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDERBY) {
				{
				setState(35);
				match(ORDERBY);
				setState(36);
				((QueryContext)_localctx).sortTuple = sortTuple();
				((QueryContext)_localctx).sortTuples.add(((QueryContext)_localctx).sortTuple);
				setState(41);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(37);
					match(COMMA);
					setState(38);
					((QueryContext)_localctx).sortTuple = sortTuple();
					((QueryContext)_localctx).sortTuples.add(((QueryContext)_localctx).sortTuple);
					}
					}
					setState(43);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SortTupleContext extends ParserRuleContext {
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public SortDirectionContext sortDirection() {
			return getRuleContext(SortDirectionContext.class,0);
		}
		public SortTupleContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sortTuple; }
	}

	public final SortTupleContext sortTuple() throws RecognitionException {
		SortTupleContext _localctx = new SortTupleContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_sortTuple);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(46);
			path();
			setState(47);
			sortDirection();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicContext extends ParserRuleContext {
		public LogicContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logic; }
	 
		public LogicContext() { }
		public void copyFrom(LogicContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LogicPrecededExprContext extends LogicContext {
		public LogicContext inner;
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public LogicContext logic() {
			return getRuleContext(LogicContext.class,0);
		}
		public LogicPrecededExprContext(LogicContext ctx) { copyFrom(ctx); }
	}
	public static class LogicHistoricalCompareExprContext extends LogicContext {
		public HistoricalCompareContext historicalCompare() {
			return getRuleContext(HistoricalCompareContext.class,0);
		}
		public LogicHistoricalCompareExprContext(LogicContext ctx) { copyFrom(ctx); }
	}
	public static class LogicCompareExprContext extends LogicContext {
		public CompareContext compare() {
			return getRuleContext(CompareContext.class,0);
		}
		public LogicCompareExprContext(LogicContext ctx) { copyFrom(ctx); }
	}
	public static class LogicBinaryExprContext extends LogicContext {
		public LogicContext left;
		public LogicBinaryOpContext op;
		public LogicContext right;
		public List<LogicContext> logic() {
			return getRuleContexts(LogicContext.class);
		}
		public LogicContext logic(int i) {
			return getRuleContext(LogicContext.class,i);
		}
		public LogicBinaryOpContext logicBinaryOp() {
			return getRuleContext(LogicBinaryOpContext.class,0);
		}
		public LogicBinaryExprContext(LogicContext ctx) { copyFrom(ctx); }
	}
	public static class LogicNotExprContext extends LogicContext {
		public LogicContext inner;
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public LogicContext logic() {
			return getRuleContext(LogicContext.class,0);
		}
		public LogicNotExprContext(LogicContext ctx) { copyFrom(ctx); }
	}

	public final LogicContext logic() throws RecognitionException {
		return logic(0);
	}

	private LogicContext logic(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		LogicContext _localctx = new LogicContext(_ctx, _parentState);
		LogicContext _prevctx = _localctx;
		int _startState = 4;
		enterRecursionRule(_localctx, 4, RULE_logic, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(58);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,2,_ctx) ) {
			case 1:
				{
				_localctx = new LogicCompareExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(50);
				compare();
				}
				break;
			case 2:
				{
				_localctx = new LogicHistoricalCompareExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(51);
				historicalCompare();
				}
				break;
			case 3:
				{
				_localctx = new LogicPrecededExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(52);
				match(LP);
				setState(53);
				((LogicPrecededExprContext)_localctx).inner = logic(0);
				setState(54);
				match(RP);
				}
				break;
			case 4:
				{
				_localctx = new LogicNotExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(56);
				match(NOT);
				setState(57);
				((LogicNotExprContext)_localctx).inner = logic(2);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(66);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new LogicBinaryExprContext(new LogicContext(_parentctx, _parentState));
					((LogicBinaryExprContext)_localctx).left = _prevctx;
					pushNewRecursionContext(_localctx, _startState, RULE_logic);
					setState(60);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(61);
					((LogicBinaryExprContext)_localctx).op = logicBinaryOp();
					setState(62);
					((LogicBinaryExprContext)_localctx).right = logic(2);
					}
					} 
				}
				setState(68);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PeriodContext extends ParserRuleContext {
		public FactorContext from;
		public FactorContext to;
		public TerminalNode BEFORE() { return getToken(NqlParser.BEFORE, 0); }
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TerminalNode AFTER() { return getToken(NqlParser.AFTER, 0); }
		public TerminalNode DURING() { return getToken(NqlParser.DURING, 0); }
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode COMMA() { return getToken(NqlParser.COMMA, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public PeriodContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_period; }
	}

	public final PeriodContext period() throws RecognitionException {
		PeriodContext _localctx = new PeriodContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_period);
		try {
			setState(80);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BEFORE:
				enterOuterAlt(_localctx, 1);
				{
				setState(69);
				match(BEFORE);
				setState(70);
				((PeriodContext)_localctx).from = factor(0);
				}
				break;
			case AFTER:
				enterOuterAlt(_localctx, 2);
				{
				setState(71);
				match(AFTER);
				setState(72);
				((PeriodContext)_localctx).from = factor(0);
				}
				break;
			case DURING:
				enterOuterAlt(_localctx, 3);
				{
				setState(73);
				match(DURING);
				setState(74);
				match(LP);
				setState(75);
				((PeriodContext)_localctx).from = factor(0);
				setState(76);
				match(COMMA);
				setState(77);
				((PeriodContext)_localctx).to = factor(0);
				setState(78);
				match(RP);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class HistoricalCompareContext extends ParserRuleContext {
		public HistoricalCompareContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_historicalCompare; }
	 
		public HistoricalCompareContext() { }
		public void copyFrom(HistoricalCompareContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class HistoricalStringMatchExprContext extends HistoricalCompareContext {
		public FactorContext value;
		public StringOperatorContext op;
		public FactorContext pattern;
		public TerminalNode WAS() { return getToken(NqlParser.WAS, 0); }
		public PeriodContext period() {
			return getRuleContext(PeriodContext.class,0);
		}
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public StringOperatorContext stringOperator() {
			return getRuleContext(StringOperatorContext.class,0);
		}
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public HistoricalStringMatchExprContext(HistoricalCompareContext ctx) { copyFrom(ctx); }
	}
	public static class HistoricalBetweenExprContext extends HistoricalCompareContext {
		public FactorContext value;
		public Token includeLower;
		public FactorContext lower;
		public FactorContext upper;
		public Token includeUpper;
		public TerminalNode WAS() { return getToken(NqlParser.WAS, 0); }
		public TerminalNode BETWEEN() { return getToken(NqlParser.BETWEEN, 0); }
		public TerminalNode COMMA() { return getToken(NqlParser.COMMA, 0); }
		public PeriodContext period() {
			return getRuleContext(PeriodContext.class,0);
		}
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode LB() { return getToken(NqlParser.LB, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public TerminalNode RB() { return getToken(NqlParser.RB, 0); }
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public HistoricalBetweenExprContext(HistoricalCompareContext ctx) { copyFrom(ctx); }
	}
	public static class HistoricalNumericCompareExprContext extends HistoricalCompareContext {
		public FactorContext left;
		public CompareOperatorContext op;
		public FactorContext right;
		public TerminalNode WAS() { return getToken(NqlParser.WAS, 0); }
		public PeriodContext period() {
			return getRuleContext(PeriodContext.class,0);
		}
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
		}
		public HistoricalNumericCompareExprContext(HistoricalCompareContext ctx) { copyFrom(ctx); }
	}
	public static class HistoricalCollectionMatchExprContext extends HistoricalCompareContext {
		public FactorContext value;
		public CollectionOperatorContext op;
		public FactorContext collection;
		public TerminalNode WAS() { return getToken(NqlParser.WAS, 0); }
		public PeriodContext period() {
			return getRuleContext(PeriodContext.class,0);
		}
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public CollectionOperatorContext collectionOperator() {
			return getRuleContext(CollectionOperatorContext.class,0);
		}
		public HistoricalCollectionMatchExprContext(HistoricalCompareContext ctx) { copyFrom(ctx); }
	}

	public final HistoricalCompareContext historicalCompare() throws RecognitionException {
		HistoricalCompareContext _localctx = new HistoricalCompareContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_historicalCompare);
		int _la;
		try {
			setState(121);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				_localctx = new HistoricalNumericCompareExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(82);
				((HistoricalNumericCompareExprContext)_localctx).left = factor(0);
				setState(83);
				match(WAS);
				setState(85);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(84);
					match(NOT);
					}
				}

				setState(88);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQUALS) | (1L << NOT_EQUALS) | (1L << GREATER) | (1L << LESS) | (1L << GREATER_EQUALS) | (1L << LESS_EQUALS))) != 0)) {
					{
					setState(87);
					((HistoricalNumericCompareExprContext)_localctx).op = compareOperator();
					}
				}

				setState(90);
				((HistoricalNumericCompareExprContext)_localctx).right = factor(0);
				setState(91);
				period();
				}
				break;
			case 2:
				_localctx = new HistoricalStringMatchExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(93);
				((HistoricalStringMatchExprContext)_localctx).value = factor(0);
				setState(94);
				match(WAS);
				setState(96);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(95);
					match(NOT);
					}
				}

				setState(98);
				((HistoricalStringMatchExprContext)_localctx).op = stringOperator();
				setState(99);
				((HistoricalStringMatchExprContext)_localctx).pattern = factor(0);
				setState(100);
				period();
				}
				break;
			case 3:
				_localctx = new HistoricalBetweenExprContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(102);
				((HistoricalBetweenExprContext)_localctx).value = factor(0);
				setState(103);
				match(WAS);
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(104);
					match(NOT);
					}
				}

				setState(107);
				match(BETWEEN);
				setState(108);
				((HistoricalBetweenExprContext)_localctx).includeLower = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==LP || _la==LB) ) {
					((HistoricalBetweenExprContext)_localctx).includeLower = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(109);
				((HistoricalBetweenExprContext)_localctx).lower = factor(0);
				setState(110);
				match(COMMA);
				setState(111);
				((HistoricalBetweenExprContext)_localctx).upper = factor(0);
				setState(112);
				((HistoricalBetweenExprContext)_localctx).includeUpper = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==RP || _la==RB) ) {
					((HistoricalBetweenExprContext)_localctx).includeUpper = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(113);
				period();
				}
				break;
			case 4:
				_localctx = new HistoricalCollectionMatchExprContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(115);
				((HistoricalCollectionMatchExprContext)_localctx).value = factor(0);
				setState(116);
				match(WAS);
				setState(117);
				((HistoricalCollectionMatchExprContext)_localctx).op = collectionOperator();
				setState(118);
				((HistoricalCollectionMatchExprContext)_localctx).collection = factor(0);
				setState(119);
				period();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompareContext extends ParserRuleContext {
		public CompareContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compare; }
	 
		public CompareContext() { }
		public void copyFrom(CompareContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StringMatchExprContext extends CompareContext {
		public FactorContext value;
		public StringOperatorContext op;
		public FactorContext pattern;
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public StringOperatorContext stringOperator() {
			return getRuleContext(StringOperatorContext.class,0);
		}
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public StringMatchExprContext(CompareContext ctx) { copyFrom(ctx); }
	}
	public static class CollectionMatchExprContext extends CompareContext {
		public FactorContext value;
		public CollectionOperatorContext op;
		public FactorContext collection;
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public CollectionOperatorContext collectionOperator() {
			return getRuleContext(CollectionOperatorContext.class,0);
		}
		public CollectionMatchExprContext(CompareContext ctx) { copyFrom(ctx); }
	}
	public static class SatisfyExprContext extends CompareContext {
		public TerminalNode ISSUE() { return getToken(NqlParser.ISSUE, 0); }
		public TerminalNode IN() { return getToken(NqlParser.IN, 0); }
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public TerminalNode SATISFY() { return getToken(NqlParser.SATISFY, 0); }
		public SatisfyExprContext(CompareContext ctx) { copyFrom(ctx); }
	}
	public static class ExistsExprContext extends CompareContext {
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public TerminalNode EXISTS() { return getToken(NqlParser.EXISTS, 0); }
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public ExistsExprContext(CompareContext ctx) { copyFrom(ctx); }
	}
	public static class NumericCompareExprContext extends CompareContext {
		public FactorContext left;
		public CompareOperatorContext op;
		public FactorContext right;
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public CompareOperatorContext compareOperator() {
			return getRuleContext(CompareOperatorContext.class,0);
		}
		public TerminalNode NOT() { return getToken(NqlParser.NOT, 0); }
		public NumericCompareExprContext(CompareContext ctx) { copyFrom(ctx); }
	}
	public static class BetweenExprContext extends CompareContext {
		public FactorContext value;
		public Token includeLower;
		public FactorContext lower;
		public FactorContext upper;
		public Token includeUpper;
		public TerminalNode BETWEEN() { return getToken(NqlParser.BETWEEN, 0); }
		public TerminalNode COMMA() { return getToken(NqlParser.COMMA, 0); }
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode LB() { return getToken(NqlParser.LB, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public TerminalNode RB() { return getToken(NqlParser.RB, 0); }
		public BetweenExprContext(CompareContext ctx) { copyFrom(ctx); }
	}

	public final CompareContext compare() throws RecognitionException {
		CompareContext _localctx = new CompareContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_compare);
		int _la;
		try {
			setState(166);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				_localctx = new ExistsExprContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(123);
				path();
				setState(125);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(124);
					match(NOT);
					}
				}

				setState(127);
				match(EXISTS);
				}
				break;
			case 2:
				_localctx = new NumericCompareExprContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(129);
				((NumericCompareExprContext)_localctx).left = factor(0);
				setState(131);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(130);
					match(NOT);
					}
				}

				setState(133);
				((NumericCompareExprContext)_localctx).op = compareOperator();
				setState(134);
				((NumericCompareExprContext)_localctx).right = factor(0);
				}
				break;
			case 3:
				_localctx = new StringMatchExprContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(136);
				((StringMatchExprContext)_localctx).value = factor(0);
				setState(138);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(137);
					match(NOT);
					}
				}

				setState(140);
				((StringMatchExprContext)_localctx).op = stringOperator();
				setState(141);
				((StringMatchExprContext)_localctx).pattern = factor(0);
				}
				break;
			case 4:
				_localctx = new BetweenExprContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(143);
				((BetweenExprContext)_localctx).value = factor(0);
				setState(144);
				match(BETWEEN);
				setState(145);
				((BetweenExprContext)_localctx).includeLower = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==LP || _la==LB) ) {
					((BetweenExprContext)_localctx).includeLower = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(146);
				((BetweenExprContext)_localctx).lower = factor(0);
				setState(147);
				match(COMMA);
				setState(148);
				((BetweenExprContext)_localctx).upper = factor(0);
				setState(149);
				((BetweenExprContext)_localctx).includeUpper = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==RP || _la==RB) ) {
					((BetweenExprContext)_localctx).includeUpper = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 5:
				_localctx = new CollectionMatchExprContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(151);
				((CollectionMatchExprContext)_localctx).value = factor(0);
				setState(152);
				((CollectionMatchExprContext)_localctx).op = collectionOperator();
				setState(153);
				((CollectionMatchExprContext)_localctx).collection = factor(0);
				}
				break;
			case 6:
				_localctx = new SatisfyExprContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(155);
				match(ISSUE);
				setState(157);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(156);
					match(NOT);
					}
				}

				setState(159);
				match(IN);
				setState(160);
				functionCall();
				}
				break;
			case 7:
				_localctx = new SatisfyExprContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(162);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==NOT) {
					{
					setState(161);
					match(NOT);
					}
				}

				setState(164);
				match(SATISFY);
				setState(165);
				functionCall();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FactorContext extends ParserRuleContext {
		public FactorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_factor; }
	 
		public FactorContext() { }
		public void copyFrom(FactorContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RawValueExprContext extends FactorContext {
		public RawContext raw() {
			return getRuleContext(RawContext.class,0);
		}
		public RawValueExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class PrecededExprContext extends FactorContext {
		public FactorContext inner;
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public PrecededExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class MathNegativeExprContext extends FactorContext {
		public FactorContext inner;
		public TerminalNode SUBTRACT() { return getToken(NqlParser.SUBTRACT, 0); }
		public FactorContext factor() {
			return getRuleContext(FactorContext.class,0);
		}
		public MathNegativeExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class MathBinaryExprContext extends FactorContext {
		public FactorContext left;
		public Token op;
		public FactorContext right;
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public TerminalNode MULTIPLY() { return getToken(NqlParser.MULTIPLY, 0); }
		public TerminalNode DIVIDE() { return getToken(NqlParser.DIVIDE, 0); }
		public TerminalNode MOD() { return getToken(NqlParser.MOD, 0); }
		public TerminalNode ADD() { return getToken(NqlParser.ADD, 0); }
		public TerminalNode SUBTRACT() { return getToken(NqlParser.SUBTRACT, 0); }
		public MathBinaryExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class DurationExprContext extends FactorContext {
		public DurationContext duration() {
			return getRuleContext(DurationContext.class,0);
		}
		public DurationExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class PathExprContext extends FactorContext {
		public PathContext path() {
			return getRuleContext(PathContext.class,0);
		}
		public PathExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class CommaListExprContext extends FactorContext {
		public FactorContext factor;
		public List<FactorContext> elements = new ArrayList<FactorContext>();
		public TerminalNode LB() { return getToken(NqlParser.LB, 0); }
		public TerminalNode RB() { return getToken(NqlParser.RB, 0); }
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(NqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(NqlParser.COMMA, i);
		}
		public CommaListExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class FunctionCallExprContext extends FactorContext {
		public FunctionCallContext functionCall() {
			return getRuleContext(FunctionCallContext.class,0);
		}
		public FunctionCallExprContext(FactorContext ctx) { copyFrom(ctx); }
	}
	public static class ConditionExprContext extends FactorContext {
		public LogicContext condition;
		public FactorContext pass;
		public FactorContext otherwise;
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode QUESTION() { return getToken(NqlParser.QUESTION, 0); }
		public TerminalNode COLON() { return getToken(NqlParser.COLON, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public LogicContext logic() {
			return getRuleContext(LogicContext.class,0);
		}
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public ConditionExprContext(FactorContext ctx) { copyFrom(ctx); }
	}

	public final FactorContext factor() throws RecognitionException {
		return factor(0);
	}

	private FactorContext factor(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		FactorContext _localctx = new FactorContext(_ctx, _parentState);
		FactorContext _prevctx = _localctx;
		int _startState = 12;
		enterRecursionRule(_localctx, 12, RULE_factor, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(198);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,17,_ctx) ) {
			case 1:
				{
				_localctx = new RawValueExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(169);
				raw();
				}
				break;
			case 2:
				{
				_localctx = new DurationExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(170);
				duration();
				}
				break;
			case 3:
				{
				_localctx = new PathExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(171);
				path();
				}
				break;
			case 4:
				{
				_localctx = new PrecededExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(172);
				match(LP);
				setState(173);
				((PrecededExprContext)_localctx).inner = factor(0);
				setState(174);
				match(RP);
				}
				break;
			case 5:
				{
				_localctx = new FunctionCallExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(176);
				functionCall();
				}
				break;
			case 6:
				{
				_localctx = new MathNegativeExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(177);
				match(SUBTRACT);
				setState(178);
				((MathNegativeExprContext)_localctx).inner = factor(8);
				}
				break;
			case 7:
				{
				_localctx = new ConditionExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(179);
				match(LP);
				setState(180);
				((ConditionExprContext)_localctx).condition = logic(0);
				setState(181);
				match(QUESTION);
				setState(182);
				((ConditionExprContext)_localctx).pass = factor(0);
				setState(183);
				match(COLON);
				setState(184);
				((ConditionExprContext)_localctx).otherwise = factor(0);
				setState(185);
				match(RP);
				}
				break;
			case 8:
				{
				_localctx = new CommaListExprContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(187);
				match(LB);
				setState(188);
				((CommaListExprContext)_localctx).factor = factor(0);
				((CommaListExprContext)_localctx).elements.add(((CommaListExprContext)_localctx).factor);
				setState(193);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(189);
					match(COMMA);
					setState(190);
					((CommaListExprContext)_localctx).factor = factor(0);
					((CommaListExprContext)_localctx).elements.add(((CommaListExprContext)_localctx).factor);
					}
					}
					setState(195);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(196);
				match(RB);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(217);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(215);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
					case 1:
						{
						_localctx = new MathBinaryExprContext(new FactorContext(_parentctx, _parentState));
						((MathBinaryExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_factor);
						setState(200);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(201);
						((MathBinaryExprContext)_localctx).op = match(MULTIPLY);
						setState(202);
						((MathBinaryExprContext)_localctx).right = factor(8);
						}
						break;
					case 2:
						{
						_localctx = new MathBinaryExprContext(new FactorContext(_parentctx, _parentState));
						((MathBinaryExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_factor);
						setState(203);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(204);
						((MathBinaryExprContext)_localctx).op = match(DIVIDE);
						setState(205);
						((MathBinaryExprContext)_localctx).right = factor(7);
						}
						break;
					case 3:
						{
						_localctx = new MathBinaryExprContext(new FactorContext(_parentctx, _parentState));
						((MathBinaryExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_factor);
						setState(206);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(207);
						((MathBinaryExprContext)_localctx).op = match(MOD);
						setState(208);
						((MathBinaryExprContext)_localctx).right = factor(6);
						}
						break;
					case 4:
						{
						_localctx = new MathBinaryExprContext(new FactorContext(_parentctx, _parentState));
						((MathBinaryExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_factor);
						setState(209);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(210);
						((MathBinaryExprContext)_localctx).op = match(ADD);
						setState(211);
						((MathBinaryExprContext)_localctx).right = factor(5);
						}
						break;
					case 5:
						{
						_localctx = new MathBinaryExprContext(new FactorContext(_parentctx, _parentState));
						((MathBinaryExprContext)_localctx).left = _prevctx;
						pushNewRecursionContext(_localctx, _startState, RULE_factor);
						setState(212);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(213);
						((MathBinaryExprContext)_localctx).op = match(SUBTRACT);
						setState(214);
						((MathBinaryExprContext)_localctx).right = factor(4);
						}
						break;
					}
					} 
				}
				setState(219);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,19,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class FunctionCallContext extends ParserRuleContext {
		public Token functionName;
		public FactorContext factor;
		public List<FactorContext> args = new ArrayList<FactorContext>();
		public TerminalNode LP() { return getToken(NqlParser.LP, 0); }
		public TerminalNode RP() { return getToken(NqlParser.RP, 0); }
		public TerminalNode ID() { return getToken(NqlParser.ID, 0); }
		public List<FactorContext> factor() {
			return getRuleContexts(FactorContext.class);
		}
		public FactorContext factor(int i) {
			return getRuleContext(FactorContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(NqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(NqlParser.COMMA, i);
		}
		public FunctionCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_functionCall; }
	}

	public final FunctionCallContext functionCall() throws RecognitionException {
		FunctionCallContext _localctx = new FunctionCallContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_functionCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(220);
			((FunctionCallContext)_localctx).functionName = match(ID);
			setState(221);
			match(LP);
			setState(230);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << LP) | (1L << LB) | (1L << TRUE) | (1L << FALSE) | (1L << SUBTRACT) | (1L << NULL) | (1L << UNSIGN) | (1L << DECIMAL) | (1L << ID) | (1L << KEY) | (1L << MILLIS) | (1L << SECONDS) | (1L << MINUTES) | (1L << HOURS) | (1L << DAYS) | (1L << WEEKS) | (1L << DATE) | (1L << DATETIME) | (1L << STRING))) != 0)) {
				{
				setState(222);
				((FunctionCallContext)_localctx).factor = factor(0);
				((FunctionCallContext)_localctx).args.add(((FunctionCallContext)_localctx).factor);
				setState(227);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(223);
					match(COMMA);
					setState(224);
					((FunctionCallContext)_localctx).factor = factor(0);
					((FunctionCallContext)_localctx).args.add(((FunctionCallContext)_localctx).factor);
					}
					}
					setState(229);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(232);
			match(RP);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PathContext extends ParserRuleContext {
		public PathElementContext pathElement;
		public List<PathElementContext> chain = new ArrayList<PathElementContext>();
		public List<PathElementContext> pathElement() {
			return getRuleContexts(PathElementContext.class);
		}
		public PathElementContext pathElement(int i) {
			return getRuleContext(PathElementContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(NqlParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(NqlParser.DOT, i);
		}
		public PathContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_path; }
	}

	public final PathContext path() throws RecognitionException {
		PathContext _localctx = new PathContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_path);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			((PathContext)_localctx).pathElement = pathElement();
			((PathContext)_localctx).chain.add(((PathContext)_localctx).pathElement);
			setState(239);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					{
					{
					setState(235);
					match(DOT);
					setState(236);
					((PathContext)_localctx).pathElement = pathElement();
					((PathContext)_localctx).chain.add(((PathContext)_localctx).pathElement);
					}
					} 
				}
				setState(241);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PathElementContext extends ParserRuleContext {
		public Token id;
		public Token key;
		public TerminalNode ID() { return getToken(NqlParser.ID, 0); }
		public TerminalNode KEY() { return getToken(NqlParser.KEY, 0); }
		public PathElementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pathElement; }
	}

	public final PathElementContext pathElement() throws RecognitionException {
		PathElementContext _localctx = new PathElementContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_pathElement);
		try {
			setState(244);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(242);
				((PathElementContext)_localctx).id = match(ID);
				}
				break;
			case KEY:
				enterOuterAlt(_localctx, 2);
				{
				setState(243);
				((PathElementContext)_localctx).key = match(KEY);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DurationContext extends ParserRuleContext {
		public Token amountMillis;
		public Token amountSeconds;
		public Token amountMinutes;
		public Token amountHours;
		public Token amountDays;
		public Token amountWeeks;
		public TerminalNode MILLIS() { return getToken(NqlParser.MILLIS, 0); }
		public TerminalNode SECONDS() { return getToken(NqlParser.SECONDS, 0); }
		public TerminalNode MINUTES() { return getToken(NqlParser.MINUTES, 0); }
		public TerminalNode HOURS() { return getToken(NqlParser.HOURS, 0); }
		public TerminalNode DAYS() { return getToken(NqlParser.DAYS, 0); }
		public TerminalNode WEEKS() { return getToken(NqlParser.WEEKS, 0); }
		public DurationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_duration; }
	}

	public final DurationContext duration() throws RecognitionException {
		DurationContext _localctx = new DurationContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_duration);
		try {
			setState(252);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case MILLIS:
				enterOuterAlt(_localctx, 1);
				{
				setState(246);
				((DurationContext)_localctx).amountMillis = match(MILLIS);
				}
				break;
			case SECONDS:
				enterOuterAlt(_localctx, 2);
				{
				setState(247);
				((DurationContext)_localctx).amountSeconds = match(SECONDS);
				}
				break;
			case MINUTES:
				enterOuterAlt(_localctx, 3);
				{
				setState(248);
				((DurationContext)_localctx).amountMinutes = match(MINUTES);
				}
				break;
			case HOURS:
				enterOuterAlt(_localctx, 4);
				{
				setState(249);
				((DurationContext)_localctx).amountHours = match(HOURS);
				}
				break;
			case DAYS:
				enterOuterAlt(_localctx, 5);
				{
				setState(250);
				((DurationContext)_localctx).amountDays = match(DAYS);
				}
				break;
			case WEEKS:
				enterOuterAlt(_localctx, 6);
				{
				setState(251);
				((DurationContext)_localctx).amountWeeks = match(WEEKS);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class RawContext extends ParserRuleContext {
		public TerminalNode NULL() { return getToken(NqlParser.NULL, 0); }
		public TerminalNode TRUE() { return getToken(NqlParser.TRUE, 0); }
		public TerminalNode FALSE() { return getToken(NqlParser.FALSE, 0); }
		public TerminalNode UNSIGN() { return getToken(NqlParser.UNSIGN, 0); }
		public TerminalNode DECIMAL() { return getToken(NqlParser.DECIMAL, 0); }
		public TerminalNode STRING() { return getToken(NqlParser.STRING, 0); }
		public TerminalNode DATE() { return getToken(NqlParser.DATE, 0); }
		public TerminalNode DATETIME() { return getToken(NqlParser.DATETIME, 0); }
		public RawContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_raw; }
	}

	public final RawContext raw() throws RecognitionException {
		RawContext _localctx = new RawContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_raw);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(254);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << TRUE) | (1L << FALSE) | (1L << NULL) | (1L << UNSIGN) | (1L << DECIMAL) | (1L << DATE) | (1L << DATETIME) | (1L << STRING))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SortDirectionContext extends ParserRuleContext {
		public TerminalNode ASC() { return getToken(NqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(NqlParser.DESC, 0); }
		public SortDirectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sortDirection; }
	}

	public final SortDirectionContext sortDirection() throws RecognitionException {
		SortDirectionContext _localctx = new SortDirectionContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_sortDirection);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			_la = _input.LA(1);
			if ( !(_la==ASC || _la==DESC) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StringOperatorContext extends ParserRuleContext {
		public TerminalNode MATCH() { return getToken(NqlParser.MATCH, 0); }
		public TerminalNode EXACTLY_MATCH() { return getToken(NqlParser.EXACTLY_MATCH, 0); }
		public TerminalNode REGEX_MATCH() { return getToken(NqlParser.REGEX_MATCH, 0); }
		public StringOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_stringOperator; }
	}

	public final StringOperatorContext stringOperator() throws RecognitionException {
		StringOperatorContext _localctx = new StringOperatorContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_stringOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(258);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << REGEX_MATCH) | (1L << MATCH) | (1L << EXACTLY_MATCH))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CollectionOperatorContext extends ParserRuleContext {
		public TerminalNode IN() { return getToken(NqlParser.IN, 0); }
		public TerminalNode NOT_IN() { return getToken(NqlParser.NOT_IN, 0); }
		public CollectionOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_collectionOperator; }
	}

	public final CollectionOperatorContext collectionOperator() throws RecognitionException {
		CollectionOperatorContext _localctx = new CollectionOperatorContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_collectionOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(260);
			_la = _input.LA(1);
			if ( !(_la==IN || _la==NOT_IN) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CompareOperatorContext extends ParserRuleContext {
		public TerminalNode EQUALS() { return getToken(NqlParser.EQUALS, 0); }
		public TerminalNode NOT_EQUALS() { return getToken(NqlParser.NOT_EQUALS, 0); }
		public TerminalNode GREATER() { return getToken(NqlParser.GREATER, 0); }
		public TerminalNode GREATER_EQUALS() { return getToken(NqlParser.GREATER_EQUALS, 0); }
		public TerminalNode LESS() { return getToken(NqlParser.LESS, 0); }
		public TerminalNode LESS_EQUALS() { return getToken(NqlParser.LESS_EQUALS, 0); }
		public CompareOperatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_compareOperator; }
	}

	public final CompareOperatorContext compareOperator() throws RecognitionException {
		CompareOperatorContext _localctx = new CompareOperatorContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_compareOperator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(262);
			_la = _input.LA(1);
			if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << EQUALS) | (1L << NOT_EQUALS) | (1L << GREATER) | (1L << LESS) | (1L << GREATER_EQUALS) | (1L << LESS_EQUALS))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LogicBinaryOpContext extends ParserRuleContext {
		public TerminalNode AND() { return getToken(NqlParser.AND, 0); }
		public TerminalNode OR() { return getToken(NqlParser.OR, 0); }
		public LogicBinaryOpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_logicBinaryOp; }
	}

	public final LogicBinaryOpContext logicBinaryOp() throws RecognitionException {
		LogicBinaryOpContext _localctx = new LogicBinaryOpContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_logicBinaryOp);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(264);
			_la = _input.LA(1);
			if ( !(_la==AND || _la==OR) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 2:
			return logic_sempred((LogicContext)_localctx, predIndex);
		case 6:
			return factor_sempred((FactorContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean logic_sempred(LogicContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean factor_sempred(FactorContext _localctx, int predIndex) {
		switch (predIndex) {
		case 1:
			return precpred(_ctx, 7);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 4);
		case 5:
			return precpred(_ctx, 3);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3>\u010d\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\3\2\3\2\3\2\3\2\3\2\7\2*\n\2\f\2\16\2-\13\2\5\2/\n\2\3\3\3\3\3\3\3\4"+
		"\3\4\3\4\3\4\3\4\3\4\3\4\3\4\3\4\5\4=\n\4\3\4\3\4\3\4\3\4\7\4C\n\4\f\4"+
		"\16\4F\13\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5S\n\5\3\6\3"+
		"\6\3\6\5\6X\n\6\3\6\5\6[\n\6\3\6\3\6\3\6\3\6\3\6\3\6\5\6c\n\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\3\6\5\6l\n\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6\3\6"+
		"\3\6\3\6\3\6\3\6\5\6|\n\6\3\7\3\7\5\7\u0080\n\7\3\7\3\7\3\7\3\7\5\7\u0086"+
		"\n\7\3\7\3\7\3\7\3\7\3\7\5\7\u008d\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7"+
		"\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\5\7\u00a0\n\7\3\7\3\7\3\7\5\7\u00a5"+
		"\n\7\3\7\3\7\5\7\u00a9\n\7\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b"+
		"\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00c2\n\b\f\b\16"+
		"\b\u00c5\13\b\3\b\3\b\5\b\u00c9\n\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3\b\3"+
		"\b\3\b\3\b\3\b\3\b\3\b\3\b\7\b\u00da\n\b\f\b\16\b\u00dd\13\b\3\t\3\t\3"+
		"\t\3\t\3\t\7\t\u00e4\n\t\f\t\16\t\u00e7\13\t\5\t\u00e9\n\t\3\t\3\t\3\n"+
		"\3\n\3\n\7\n\u00f0\n\n\f\n\16\n\u00f3\13\n\3\13\3\13\5\13\u00f7\n\13\3"+
		"\f\3\f\3\f\3\f\3\f\3\f\5\f\u00ff\n\f\3\r\3\r\3\16\3\16\3\17\3\17\3\20"+
		"\3\20\3\21\3\21\3\22\3\22\3\22\2\4\6\16\23\2\4\6\b\n\f\16\20\22\24\26"+
		"\30\32\34\36 \"\2\n\4\2\4\4\6\6\4\2\5\5\7\7\6\2\17\20((\61\62;=\3\2,-"+
		"\3\2\30\32\3\2)*\3\2\22\27\3\2 !\2\u012b\2$\3\2\2\2\4\60\3\2\2\2\6<\3"+
		"\2\2\2\bR\3\2\2\2\n{\3\2\2\2\f\u00a8\3\2\2\2\16\u00c8\3\2\2\2\20\u00de"+
		"\3\2\2\2\22\u00ec\3\2\2\2\24\u00f6\3\2\2\2\26\u00fe\3\2\2\2\30\u0100\3"+
		"\2\2\2\32\u0102\3\2\2\2\34\u0104\3\2\2\2\36\u0106\3\2\2\2 \u0108\3\2\2"+
		"\2\"\u010a\3\2\2\2$.\5\6\4\2%&\7+\2\2&+\5\4\3\2\'(\7\r\2\2(*\5\4\3\2)"+
		"\'\3\2\2\2*-\3\2\2\2+)\3\2\2\2+,\3\2\2\2,/\3\2\2\2-+\3\2\2\2.%\3\2\2\2"+
		"./\3\2\2\2/\3\3\2\2\2\60\61\5\22\n\2\61\62\5\32\16\2\62\5\3\2\2\2\63\64"+
		"\b\4\1\2\64=\5\f\7\2\65=\5\n\6\2\66\67\7\4\2\2\678\5\6\4\289\7\5\2\29"+
		"=\3\2\2\2:;\7\37\2\2;=\5\6\4\4<\63\3\2\2\2<\65\3\2\2\2<\66\3\2\2\2<:\3"+
		"\2\2\2=D\3\2\2\2>?\f\3\2\2?@\5\"\22\2@A\5\6\4\4AC\3\2\2\2B>\3\2\2\2CF"+
		"\3\2\2\2DB\3\2\2\2DE\3\2\2\2E\7\3\2\2\2FD\3\2\2\2GH\7\35\2\2HS\5\16\b"+
		"\2IJ\7\36\2\2JS\5\16\b\2KL\7\34\2\2LM\7\4\2\2MN\5\16\b\2NO\7\r\2\2OP\5"+
		"\16\b\2PQ\7\5\2\2QS\3\2\2\2RG\3\2\2\2RI\3\2\2\2RK\3\2\2\2S\t\3\2\2\2T"+
		"U\5\16\b\2UW\7\33\2\2VX\7\37\2\2WV\3\2\2\2WX\3\2\2\2XZ\3\2\2\2Y[\5 \21"+
		"\2ZY\3\2\2\2Z[\3\2\2\2[\\\3\2\2\2\\]\5\16\b\2]^\5\b\5\2^|\3\2\2\2_`\5"+
		"\16\b\2`b\7\33\2\2ac\7\37\2\2ba\3\2\2\2bc\3\2\2\2cd\3\2\2\2de\5\34\17"+
		"\2ef\5\16\b\2fg\5\b\5\2g|\3\2\2\2hi\5\16\b\2ik\7\33\2\2jl\7\37\2\2kj\3"+
		"\2\2\2kl\3\2\2\2lm\3\2\2\2mn\7\21\2\2no\t\2\2\2op\5\16\b\2pq\7\r\2\2q"+
		"r\5\16\b\2rs\t\3\2\2st\5\b\5\2t|\3\2\2\2uv\5\16\b\2vw\7\33\2\2wx\5\36"+
		"\20\2xy\5\16\b\2yz\5\b\5\2z|\3\2\2\2{T\3\2\2\2{_\3\2\2\2{h\3\2\2\2{u\3"+
		"\2\2\2|\13\3\2\2\2}\177\5\22\n\2~\u0080\7\37\2\2\177~\3\2\2\2\177\u0080"+
		"\3\2\2\2\u0080\u0081\3\2\2\2\u0081\u0082\7\60\2\2\u0082\u00a9\3\2\2\2"+
		"\u0083\u0085\5\16\b\2\u0084\u0086\7\37\2\2\u0085\u0084\3\2\2\2\u0085\u0086"+
		"\3\2\2\2\u0086\u0087\3\2\2\2\u0087\u0088\5 \21\2\u0088\u0089\5\16\b\2"+
		"\u0089\u00a9\3\2\2\2\u008a\u008c\5\16\b\2\u008b\u008d\7\37\2\2\u008c\u008b"+
		"\3\2\2\2\u008c\u008d\3\2\2\2\u008d\u008e\3\2\2\2\u008e\u008f\5\34\17\2"+
		"\u008f\u0090\5\16\b\2\u0090\u00a9\3\2\2\2\u0091\u0092\5\16\b\2\u0092\u0093"+
		"\7\21\2\2\u0093\u0094\t\2\2\2\u0094\u0095\5\16\b\2\u0095\u0096\7\r\2\2"+
		"\u0096\u0097\5\16\b\2\u0097\u0098\t\3\2\2\u0098\u00a9\3\2\2\2\u0099\u009a"+
		"\5\16\b\2\u009a\u009b\5\36\20\2\u009b\u009c\5\16\b\2\u009c\u00a9\3\2\2"+
		"\2\u009d\u009f\7.\2\2\u009e\u00a0\7\37\2\2\u009f\u009e\3\2\2\2\u009f\u00a0"+
		"\3\2\2\2\u00a0\u00a1\3\2\2\2\u00a1\u00a2\7)\2\2\u00a2\u00a9\5\20\t\2\u00a3"+
		"\u00a5\7\37\2\2\u00a4\u00a3\3\2\2\2\u00a4\u00a5\3\2\2\2\u00a5\u00a6\3"+
		"\2\2\2\u00a6\u00a7\7/\2\2\u00a7\u00a9\5\20\t\2\u00a8}\3\2\2\2\u00a8\u0083"+
		"\3\2\2\2\u00a8\u008a\3\2\2\2\u00a8\u0091\3\2\2\2\u00a8\u0099\3\2\2\2\u00a8"+
		"\u009d\3\2\2\2\u00a8\u00a4\3\2\2\2\u00a9\r\3\2\2\2\u00aa\u00ab\b\b\1\2"+
		"\u00ab\u00c9\5\30\r\2\u00ac\u00c9\5\26\f\2\u00ad\u00c9\5\22\n\2\u00ae"+
		"\u00af\7\4\2\2\u00af\u00b0\5\16\b\2\u00b0\u00b1\7\5\2\2\u00b1\u00c9\3"+
		"\2\2\2\u00b2\u00c9\5\20\t\2\u00b3\u00b4\7$\2\2\u00b4\u00c9\5\16\b\n\u00b5"+
		"\u00b6\7\4\2\2\u00b6\u00b7\5\6\4\2\u00b7\u00b8\7\t\2\2\u00b8\u00b9\5\16"+
		"\b\2\u00b9\u00ba\7\n\2\2\u00ba\u00bb\5\16\b\2\u00bb\u00bc\7\5\2\2\u00bc"+
		"\u00c9\3\2\2\2\u00bd\u00be\7\6\2\2\u00be\u00c3\5\16\b\2\u00bf\u00c0\7"+
		"\r\2\2\u00c0\u00c2\5\16\b\2\u00c1\u00bf\3\2\2\2\u00c2\u00c5\3\2\2\2\u00c3"+
		"\u00c1\3\2\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c6\3\2\2\2\u00c5\u00c3\3\2"+
		"\2\2\u00c6\u00c7\7\7\2\2\u00c7\u00c9\3\2\2\2\u00c8\u00aa\3\2\2\2\u00c8"+
		"\u00ac\3\2\2\2\u00c8\u00ad\3\2\2\2\u00c8\u00ae\3\2\2\2\u00c8\u00b2\3\2"+
		"\2\2\u00c8\u00b3\3\2\2\2\u00c8\u00b5\3\2\2\2\u00c8\u00bd\3\2\2\2\u00c9"+
		"\u00db\3\2\2\2\u00ca\u00cb\f\t\2\2\u00cb\u00cc\7%\2\2\u00cc\u00da\5\16"+
		"\b\n\u00cd\u00ce\f\b\2\2\u00ce\u00cf\7&\2\2\u00cf\u00da\5\16\b\t\u00d0"+
		"\u00d1\f\7\2\2\u00d1\u00d2\7\'\2\2\u00d2\u00da\5\16\b\b\u00d3\u00d4\f"+
		"\6\2\2\u00d4\u00d5\7#\2\2\u00d5\u00da\5\16\b\7\u00d6\u00d7\f\5\2\2\u00d7"+
		"\u00d8\7$\2\2\u00d8\u00da\5\16\b\6\u00d9\u00ca\3\2\2\2\u00d9\u00cd\3\2"+
		"\2\2\u00d9\u00d0\3\2\2\2\u00d9\u00d3\3\2\2\2\u00d9\u00d6\3\2\2\2\u00da"+
		"\u00dd\3\2\2\2\u00db\u00d9\3\2\2\2\u00db\u00dc\3\2\2\2\u00dc\17\3\2\2"+
		"\2\u00dd\u00db\3\2\2\2\u00de\u00df\7\63\2\2\u00df\u00e8\7\4\2\2\u00e0"+
		"\u00e5\5\16\b\2\u00e1\u00e2\7\r\2\2\u00e2\u00e4\5\16\b\2\u00e3\u00e1\3"+
		"\2\2\2\u00e4\u00e7\3\2\2\2\u00e5\u00e3\3\2\2\2\u00e5\u00e6\3\2\2\2\u00e6"+
		"\u00e9\3\2\2\2\u00e7\u00e5\3\2\2\2\u00e8\u00e0\3\2\2\2\u00e8\u00e9\3\2"+
		"\2\2\u00e9\u00ea\3\2\2\2\u00ea\u00eb\7\5\2\2\u00eb\21\3\2\2\2\u00ec\u00f1"+
		"\5\24\13\2\u00ed\u00ee\7\f\2\2\u00ee\u00f0\5\24\13\2\u00ef\u00ed\3\2\2"+
		"\2\u00f0\u00f3\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\23"+
		"\3\2\2\2\u00f3\u00f1\3\2\2\2\u00f4\u00f7\7\63\2\2\u00f5\u00f7\7\64\2\2"+
		"\u00f6\u00f4\3\2\2\2\u00f6\u00f5\3\2\2\2\u00f7\25\3\2\2\2\u00f8\u00ff"+
		"\7\65\2\2\u00f9\u00ff\7\66\2\2\u00fa\u00ff\7\67\2\2\u00fb\u00ff\78\2\2"+
		"\u00fc\u00ff\79\2\2\u00fd\u00ff\7:\2\2\u00fe\u00f8\3\2\2\2\u00fe\u00f9"+
		"\3\2\2\2\u00fe\u00fa\3\2\2\2\u00fe\u00fb\3\2\2\2\u00fe\u00fc\3\2\2\2\u00fe"+
		"\u00fd\3\2\2\2\u00ff\27\3\2\2\2\u0100\u0101\t\4\2\2\u0101\31\3\2\2\2\u0102"+
		"\u0103\t\5\2\2\u0103\33\3\2\2\2\u0104\u0105\t\6\2\2\u0105\35\3\2\2\2\u0106"+
		"\u0107\t\7\2\2\u0107\37\3\2\2\2\u0108\u0109\t\b\2\2\u0109!\3\2\2\2\u010a"+
		"\u010b\t\t\2\2\u010b#\3\2\2\2\33+.<DRWZbk{\177\u0085\u008c\u009f\u00a4"+
		"\u00a8\u00c3\u00c8\u00d9\u00db\u00e5\u00e8\u00f1\u00f6\u00fe";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}