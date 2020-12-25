// Generated from NqlParser.g4 by ANTLR 4.9
// jshint ignore: start
import antlr4 from 'antlr4';
import NqlParserListener from './NqlParserListener.js';

const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003>\u010d\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0002\u0007\u0002*\n\u0002\f\u0002\u000e\u0002",
    "-\u000b\u0002\u0005\u0002/\n\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0005\u0004=\n\u0004\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004C\n\u0004\f\u0004\u000e",
    "\u0004F\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005",
    "\u0003\u0005\u0005\u0005S\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006X\n\u0006\u0003\u0006\u0005\u0006[\n\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0005\u0006c",
    "\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0005\u0006l\n\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006",
    "\u0005\u0006|\n\u0006\u0003\u0007\u0003\u0007\u0005\u0007\u0080\n\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u0007\u0086\n",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u008d\n\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007",
    "\u0003\u0007\u0005\u0007\u00a0\n\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0005\u0007\u00a5\n\u0007\u0003\u0007\u0003\u0007\u0005\u0007",
    "\u00a9\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u00c2",
    "\n\b\f\b\u000e\b\u00c5\u000b\b\u0003\b\u0003\b\u0005\b\u00c9\n\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\b\u00da\n\b\f\b\u000e",
    "\b\u00dd\u000b\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0007\t\u00e4",
    "\n\t\f\t\u000e\t\u00e7\u000b\t\u0005\t\u00e9\n\t\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\n\u0007\n\u00f0\n\n\f\n\u000e\n\u00f3\u000b\n\u0003",
    "\u000b\u0003\u000b\u0005\u000b\u00f7\n\u000b\u0003\f\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\f\u0005\f\u00ff\n\f\u0003\r\u0003\r\u0003\u000e",
    "\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0002\u0004\u0006\u000e",
    "\u0013\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a",
    "\u001c\u001e \"\u0002\n\u0004\u0002\u0004\u0004\u0006\u0006\u0004\u0002",
    "\u0005\u0005\u0007\u0007\u0006\u0002\u000f\u0010((12;=\u0003\u0002,",
    "-\u0003\u0002\u0018\u001a\u0003\u0002)*\u0003\u0002\u0012\u0017\u0003",
    "\u0002 !\u0002\u012b\u0002$\u0003\u0002\u0002\u0002\u00040\u0003\u0002",
    "\u0002\u0002\u0006<\u0003\u0002\u0002\u0002\bR\u0003\u0002\u0002\u0002",
    "\n{\u0003\u0002\u0002\u0002\f\u00a8\u0003\u0002\u0002\u0002\u000e\u00c8",
    "\u0003\u0002\u0002\u0002\u0010\u00de\u0003\u0002\u0002\u0002\u0012\u00ec",
    "\u0003\u0002\u0002\u0002\u0014\u00f6\u0003\u0002\u0002\u0002\u0016\u00fe",
    "\u0003\u0002\u0002\u0002\u0018\u0100\u0003\u0002\u0002\u0002\u001a\u0102",
    "\u0003\u0002\u0002\u0002\u001c\u0104\u0003\u0002\u0002\u0002\u001e\u0106",
    "\u0003\u0002\u0002\u0002 \u0108\u0003\u0002\u0002\u0002\"\u010a\u0003",
    "\u0002\u0002\u0002$.\u0005\u0006\u0004\u0002%&\u0007+\u0002\u0002&+",
    "\u0005\u0004\u0003\u0002\'(\u0007\r\u0002\u0002(*\u0005\u0004\u0003",
    "\u0002)\'\u0003\u0002\u0002\u0002*-\u0003\u0002\u0002\u0002+)\u0003",
    "\u0002\u0002\u0002+,\u0003\u0002\u0002\u0002,/\u0003\u0002\u0002\u0002",
    "-+\u0003\u0002\u0002\u0002.%\u0003\u0002\u0002\u0002./\u0003\u0002\u0002",
    "\u0002/\u0003\u0003\u0002\u0002\u000201\u0005\u0012\n\u000212\u0005",
    "\u001a\u000e\u00022\u0005\u0003\u0002\u0002\u000234\b\u0004\u0001\u0002",
    "4=\u0005\f\u0007\u00025=\u0005\n\u0006\u000267\u0007\u0004\u0002\u0002",
    "78\u0005\u0006\u0004\u000289\u0007\u0005\u0002\u00029=\u0003\u0002\u0002",
    "\u0002:;\u0007\u001f\u0002\u0002;=\u0005\u0006\u0004\u0004<3\u0003\u0002",
    "\u0002\u0002<5\u0003\u0002\u0002\u0002<6\u0003\u0002\u0002\u0002<:\u0003",
    "\u0002\u0002\u0002=D\u0003\u0002\u0002\u0002>?\f\u0003\u0002\u0002?",
    "@\u0005\"\u0012\u0002@A\u0005\u0006\u0004\u0004AC\u0003\u0002\u0002",
    "\u0002B>\u0003\u0002\u0002\u0002CF\u0003\u0002\u0002\u0002DB\u0003\u0002",
    "\u0002\u0002DE\u0003\u0002\u0002\u0002E\u0007\u0003\u0002\u0002\u0002",
    "FD\u0003\u0002\u0002\u0002GH\u0007\u001d\u0002\u0002HS\u0005\u000e\b",
    "\u0002IJ\u0007\u001e\u0002\u0002JS\u0005\u000e\b\u0002KL\u0007\u001c",
    "\u0002\u0002LM\u0007\u0004\u0002\u0002MN\u0005\u000e\b\u0002NO\u0007",
    "\r\u0002\u0002OP\u0005\u000e\b\u0002PQ\u0007\u0005\u0002\u0002QS\u0003",
    "\u0002\u0002\u0002RG\u0003\u0002\u0002\u0002RI\u0003\u0002\u0002\u0002",
    "RK\u0003\u0002\u0002\u0002S\t\u0003\u0002\u0002\u0002TU\u0005\u000e",
    "\b\u0002UW\u0007\u001b\u0002\u0002VX\u0007\u001f\u0002\u0002WV\u0003",
    "\u0002\u0002\u0002WX\u0003\u0002\u0002\u0002XZ\u0003\u0002\u0002\u0002",
    "Y[\u0005 \u0011\u0002ZY\u0003\u0002\u0002\u0002Z[\u0003\u0002\u0002",
    "\u0002[\\\u0003\u0002\u0002\u0002\\]\u0005\u000e\b\u0002]^\u0005\b\u0005",
    "\u0002^|\u0003\u0002\u0002\u0002_`\u0005\u000e\b\u0002`b\u0007\u001b",
    "\u0002\u0002ac\u0007\u001f\u0002\u0002ba\u0003\u0002\u0002\u0002bc\u0003",
    "\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0005\u001c\u000f\u0002",
    "ef\u0005\u000e\b\u0002fg\u0005\b\u0005\u0002g|\u0003\u0002\u0002\u0002",
    "hi\u0005\u000e\b\u0002ik\u0007\u001b\u0002\u0002jl\u0007\u001f\u0002",
    "\u0002kj\u0003\u0002\u0002\u0002kl\u0003\u0002\u0002\u0002lm\u0003\u0002",
    "\u0002\u0002mn\u0007\u0011\u0002\u0002no\t\u0002\u0002\u0002op\u0005",
    "\u000e\b\u0002pq\u0007\r\u0002\u0002qr\u0005\u000e\b\u0002rs\t\u0003",
    "\u0002\u0002st\u0005\b\u0005\u0002t|\u0003\u0002\u0002\u0002uv\u0005",
    "\u000e\b\u0002vw\u0007\u001b\u0002\u0002wx\u0005\u001e\u0010\u0002x",
    "y\u0005\u000e\b\u0002yz\u0005\b\u0005\u0002z|\u0003\u0002\u0002\u0002",
    "{T\u0003\u0002\u0002\u0002{_\u0003\u0002\u0002\u0002{h\u0003\u0002\u0002",
    "\u0002{u\u0003\u0002\u0002\u0002|\u000b\u0003\u0002\u0002\u0002}\u007f",
    "\u0005\u0012\n\u0002~\u0080\u0007\u001f\u0002\u0002\u007f~\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\u00070\u0002\u0002\u0082\u00a9\u0003\u0002",
    "\u0002\u0002\u0083\u0085\u0005\u000e\b\u0002\u0084\u0086\u0007\u001f",
    "\u0002\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002",
    "\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0005 ",
    "\u0011\u0002\u0088\u0089\u0005\u000e\b\u0002\u0089\u00a9\u0003\u0002",
    "\u0002\u0002\u008a\u008c\u0005\u000e\b\u0002\u008b\u008d\u0007\u001f",
    "\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002\u008c\u008d\u0003\u0002",
    "\u0002\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f\u0005\u001c",
    "\u000f\u0002\u008f\u0090\u0005\u000e\b\u0002\u0090\u00a9\u0003\u0002",
    "\u0002\u0002\u0091\u0092\u0005\u000e\b\u0002\u0092\u0093\u0007\u0011",
    "\u0002\u0002\u0093\u0094\t\u0002\u0002\u0002\u0094\u0095\u0005\u000e",
    "\b\u0002\u0095\u0096\u0007\r\u0002\u0002\u0096\u0097\u0005\u000e\b\u0002",
    "\u0097\u0098\t\u0003\u0002\u0002\u0098\u00a9\u0003\u0002\u0002\u0002",
    "\u0099\u009a\u0005\u000e\b\u0002\u009a\u009b\u0005\u001e\u0010\u0002",
    "\u009b\u009c\u0005\u000e\b\u0002\u009c\u00a9\u0003\u0002\u0002\u0002",
    "\u009d\u009f\u0007.\u0002\u0002\u009e\u00a0\u0007\u001f\u0002\u0002",
    "\u009f\u009e\u0003\u0002\u0002\u0002\u009f\u00a0\u0003\u0002\u0002\u0002",
    "\u00a0\u00a1\u0003\u0002\u0002\u0002\u00a1\u00a2\u0007)\u0002\u0002",
    "\u00a2\u00a9\u0005\u0010\t\u0002\u00a3\u00a5\u0007\u001f\u0002\u0002",
    "\u00a4\u00a3\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002",
    "\u00a5\u00a6\u0003\u0002\u0002\u0002\u00a6\u00a7\u0007/\u0002\u0002",
    "\u00a7\u00a9\u0005\u0010\t\u0002\u00a8}\u0003\u0002\u0002\u0002\u00a8",
    "\u0083\u0003\u0002\u0002\u0002\u00a8\u008a\u0003\u0002\u0002\u0002\u00a8",
    "\u0091\u0003\u0002\u0002\u0002\u00a8\u0099\u0003\u0002\u0002\u0002\u00a8",
    "\u009d\u0003\u0002\u0002\u0002\u00a8\u00a4\u0003\u0002\u0002\u0002\u00a9",
    "\r\u0003\u0002\u0002\u0002\u00aa\u00ab\b\b\u0001\u0002\u00ab\u00c9\u0005",
    "\u0018\r\u0002\u00ac\u00c9\u0005\u0016\f\u0002\u00ad\u00c9\u0005\u0012",
    "\n\u0002\u00ae\u00af\u0007\u0004\u0002\u0002\u00af\u00b0\u0005\u000e",
    "\b\u0002\u00b0\u00b1\u0007\u0005\u0002\u0002\u00b1\u00c9\u0003\u0002",
    "\u0002\u0002\u00b2\u00c9\u0005\u0010\t\u0002\u00b3\u00b4\u0007$\u0002",
    "\u0002\u00b4\u00c9\u0005\u000e\b\n\u00b5\u00b6\u0007\u0004\u0002\u0002",
    "\u00b6\u00b7\u0005\u0006\u0004\u0002\u00b7\u00b8\u0007\t\u0002\u0002",
    "\u00b8\u00b9\u0005\u000e\b\u0002\u00b9\u00ba\u0007\n\u0002\u0002\u00ba",
    "\u00bb\u0005\u000e\b\u0002\u00bb\u00bc\u0007\u0005\u0002\u0002\u00bc",
    "\u00c9\u0003\u0002\u0002\u0002\u00bd\u00be\u0007\u0006\u0002\u0002\u00be",
    "\u00c3\u0005\u000e\b\u0002\u00bf\u00c0\u0007\r\u0002\u0002\u00c0\u00c2",
    "\u0005\u000e\b\u0002\u00c1\u00bf\u0003\u0002\u0002\u0002\u00c2\u00c5",
    "\u0003\u0002\u0002\u0002\u00c3\u00c1\u0003\u0002\u0002\u0002\u00c3\u00c4",
    "\u0003\u0002\u0002\u0002\u00c4\u00c6\u0003\u0002\u0002\u0002\u00c5\u00c3",
    "\u0003\u0002\u0002\u0002\u00c6\u00c7\u0007\u0007\u0002\u0002\u00c7\u00c9",
    "\u0003\u0002\u0002\u0002\u00c8\u00aa\u0003\u0002\u0002\u0002\u00c8\u00ac",
    "\u0003\u0002\u0002\u0002\u00c8\u00ad\u0003\u0002\u0002\u0002\u00c8\u00ae",
    "\u0003\u0002\u0002\u0002\u00c8\u00b2\u0003\u0002\u0002\u0002\u00c8\u00b3",
    "\u0003\u0002\u0002\u0002\u00c8\u00b5\u0003\u0002\u0002\u0002\u00c8\u00bd",
    "\u0003\u0002\u0002\u0002\u00c9\u00db\u0003\u0002\u0002\u0002\u00ca\u00cb",
    "\f\t\u0002\u0002\u00cb\u00cc\u0007%\u0002\u0002\u00cc\u00da\u0005\u000e",
    "\b\n\u00cd\u00ce\f\b\u0002\u0002\u00ce\u00cf\u0007&\u0002\u0002\u00cf",
    "\u00da\u0005\u000e\b\t\u00d0\u00d1\f\u0007\u0002\u0002\u00d1\u00d2\u0007",
    "\'\u0002\u0002\u00d2\u00da\u0005\u000e\b\b\u00d3\u00d4\f\u0006\u0002",
    "\u0002\u00d4\u00d5\u0007#\u0002\u0002\u00d5\u00da\u0005\u000e\b\u0007",
    "\u00d6\u00d7\f\u0005\u0002\u0002\u00d7\u00d8\u0007$\u0002\u0002\u00d8",
    "\u00da\u0005\u000e\b\u0006\u00d9\u00ca\u0003\u0002\u0002\u0002\u00d9",
    "\u00cd\u0003\u0002\u0002\u0002\u00d9\u00d0\u0003\u0002\u0002\u0002\u00d9",
    "\u00d3\u0003\u0002\u0002\u0002\u00d9\u00d6\u0003\u0002\u0002\u0002\u00da",
    "\u00dd\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00db",
    "\u00dc\u0003\u0002\u0002\u0002\u00dc\u000f\u0003\u0002\u0002\u0002\u00dd",
    "\u00db\u0003\u0002\u0002\u0002\u00de\u00df\u00073\u0002\u0002\u00df",
    "\u00e8\u0007\u0004\u0002\u0002\u00e0\u00e5\u0005\u000e\b\u0002\u00e1",
    "\u00e2\u0007\r\u0002\u0002\u00e2\u00e4\u0005\u000e\b\u0002\u00e3\u00e1",
    "\u0003\u0002\u0002\u0002\u00e4\u00e7\u0003\u0002\u0002\u0002\u00e5\u00e3",
    "\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002\u0002\u00e6\u00e9",
    "\u0003\u0002\u0002\u0002\u00e7\u00e5\u0003\u0002\u0002\u0002\u00e8\u00e0",
    "\u0003\u0002\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e9\u00ea",
    "\u0003\u0002\u0002\u0002\u00ea\u00eb\u0007\u0005\u0002\u0002\u00eb\u0011",
    "\u0003\u0002\u0002\u0002\u00ec\u00f1\u0005\u0014\u000b\u0002\u00ed\u00ee",
    "\u0007\f\u0002\u0002\u00ee\u00f0\u0005\u0014\u000b\u0002\u00ef\u00ed",
    "\u0003\u0002\u0002\u0002\u00f0\u00f3\u0003\u0002\u0002\u0002\u00f1\u00ef",
    "\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002\u00f2\u0013",
    "\u0003\u0002\u0002\u0002\u00f3\u00f1\u0003\u0002\u0002\u0002\u00f4\u00f7",
    "\u00073\u0002\u0002\u00f5\u00f7\u00074\u0002\u0002\u00f6\u00f4\u0003",
    "\u0002\u0002\u0002\u00f6\u00f5\u0003\u0002\u0002\u0002\u00f7\u0015\u0003",
    "\u0002\u0002\u0002\u00f8\u00ff\u00075\u0002\u0002\u00f9\u00ff\u0007",
    "6\u0002\u0002\u00fa\u00ff\u00077\u0002\u0002\u00fb\u00ff\u00078\u0002",
    "\u0002\u00fc\u00ff\u00079\u0002\u0002\u00fd\u00ff\u0007:\u0002\u0002",
    "\u00fe\u00f8\u0003\u0002\u0002\u0002\u00fe\u00f9\u0003\u0002\u0002\u0002",
    "\u00fe\u00fa\u0003\u0002\u0002\u0002\u00fe\u00fb\u0003\u0002\u0002\u0002",
    "\u00fe\u00fc\u0003\u0002\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002",
    "\u00ff\u0017\u0003\u0002\u0002\u0002\u0100\u0101\t\u0004\u0002\u0002",
    "\u0101\u0019\u0003\u0002\u0002\u0002\u0102\u0103\t\u0005\u0002\u0002",
    "\u0103\u001b\u0003\u0002\u0002\u0002\u0104\u0105\t\u0006\u0002\u0002",
    "\u0105\u001d\u0003\u0002\u0002\u0002\u0106\u0107\t\u0007\u0002\u0002",
    "\u0107\u001f\u0003\u0002\u0002\u0002\u0108\u0109\t\b\u0002\u0002\u0109",
    "!\u0003\u0002\u0002\u0002\u010a\u010b\t\t\u0002\u0002\u010b#\u0003\u0002",
    "\u0002\u0002\u001b+.<DRWZbk{\u007f\u0085\u008c\u009f\u00a4\u00a8\u00c3",
    "\u00c8\u00d9\u00db\u00e5\u00e8\u00f1\u00f6\u00fe"].join("");


export const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class NqlParser extends antlr4.Parser {

    static grammarFileName = "NqlParser.g4";
    static literalNames = [ null, "'_'", "'('", "')'", "'['", "']'", "'|'", 
                            "'?'", "':'", "';'", "'.'", "','", null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, null, null, null, null, null, 
                            null, null, null, "'+'", "'-'", "'*'", "'/'", 
                            "'%'" ];
    static symbolicNames = [ null, "UNDERSCORE", "LP", "RP", "LB", "RB", 
                             "PIPE", "QUESTION", "COLON", "SEMI_COLON", 
                             "DOT", "COMMA", "AS", "TRUE", "FALSE", "BETWEEN", 
                             "EQUALS", "NOT_EQUALS", "GREATER", "LESS", 
                             "GREATER_EQUALS", "LESS_EQUALS", "REGEX_MATCH", 
                             "MATCH", "EXACTLY_MATCH", "WAS", "DURING", 
                             "BEFORE", "AFTER", "NOT", "AND", "OR", "XOR", 
                             "ADD", "SUBTRACT", "MULTIPLY", "DIVIDE", "MOD", 
                             "NULL", "IN", "NOT_IN", "ORDERBY", "ASC", "DESC", 
                             "ISSUE", "SATISFY", "EXISTS", "UNSIGN", "DECIMAL", 
                             "ID", "KEY", "MILLIS", "SECONDS", "MINUTES", 
                             "HOURS", "DAYS", "WEEKS", "DATE", "DATETIME", 
                             "STRING", "WS" ];
    static ruleNames = [ "query", "sortTuple", "logic", "period", "historicalCompare", 
                         "compare", "factor", "functionCall", "path", "pathElement", 
                         "duration", "raw", "sortDirection", "stringOperator", 
                         "collectionOperator", "compareOperator", "logicBinaryOp" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = NqlParser.ruleNames;
        this.literalNames = NqlParser.literalNames;
        this.symbolicNames = NqlParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.logic_sempred(localctx, predIndex);
    	case 6:
    	    		return this.factor_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    logic_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    factor_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 7);
    		case 2:
    			return this.precpred(this._ctx, 6);
    		case 3:
    			return this.precpred(this._ctx, 5);
    		case 4:
    			return this.precpred(this._ctx, 4);
    		case 5:
    			return this.precpred(this._ctx, 3);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	query() {
	    let localctx = new QueryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, NqlParser.RULE_query);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.logic(0);
	        this.state = 44;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===NqlParser.ORDERBY) {
	            this.state = 35;
	            this.match(NqlParser.ORDERBY);
	            this.state = 36;
	            localctx._sortTuple = this.sortTuple();
	            localctx.sortTuples.push(localctx._sortTuple);
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===NqlParser.COMMA) {
	                this.state = 37;
	                this.match(NqlParser.COMMA);
	                this.state = 38;
	                localctx._sortTuple = this.sortTuple();
	                localctx.sortTuples.push(localctx._sortTuple);
	                this.state = 43;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sortTuple() {
	    let localctx = new SortTupleContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, NqlParser.RULE_sortTuple);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.path();
	        this.state = 47;
	        this.sortDirection();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	logic(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new LogicContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, NqlParser.RULE_logic, _p);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 58;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new LogicCompareExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 50;
	            this.compare();
	            break;

	        case 2:
	            localctx = new LogicHistoricalCompareExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 51;
	            this.historicalCompare();
	            break;

	        case 3:
	            localctx = new LogicPrecededExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 52;
	            this.match(NqlParser.LP);
	            this.state = 53;
	            localctx.inner = this.logic(0);
	            this.state = 54;
	            this.match(NqlParser.RP);
	            break;

	        case 4:
	            localctx = new LogicNotExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 56;
	            this.match(NqlParser.NOT);
	            this.state = 57;
	            localctx.inner = this.logic(2);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 66;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new LogicBinaryExprContext(this, new LogicContext(this, _parentctx, _parentState));
	                localctx.left = _prevctx;
	                this.pushNewRecursionContext(localctx, _startState, NqlParser.RULE_logic);
	                this.state = 60;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 61;
	                localctx.op = this.logicBinaryOp();
	                this.state = 62;
	                localctx.right = this.logic(2); 
	            }
	            this.state = 68;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	period() {
	    let localctx = new PeriodContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, NqlParser.RULE_period);
	    try {
	        this.state = 80;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NqlParser.BEFORE:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 69;
	            this.match(NqlParser.BEFORE);
	            this.state = 70;
	            localctx.from = this.factor(0);
	            break;
	        case NqlParser.AFTER:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 71;
	            this.match(NqlParser.AFTER);
	            this.state = 72;
	            localctx.from = this.factor(0);
	            break;
	        case NqlParser.DURING:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 73;
	            this.match(NqlParser.DURING);
	            this.state = 74;
	            this.match(NqlParser.LP);
	            this.state = 75;
	            localctx.from = this.factor(0);
	            this.state = 76;
	            this.match(NqlParser.COMMA);
	            this.state = 77;
	            localctx.to = this.factor(0);
	            this.state = 78;
	            this.match(NqlParser.RP);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	historicalCompare() {
	    let localctx = new HistoricalCompareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, NqlParser.RULE_historicalCompare);
	    var _la = 0; // Token type
	    try {
	        this.state = 121;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new HistoricalNumericCompareExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 82;
	            localctx.left = this.factor(0);
	            this.state = 83;
	            this.match(NqlParser.WAS);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 84;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NqlParser.EQUALS) | (1 << NqlParser.NOT_EQUALS) | (1 << NqlParser.GREATER) | (1 << NqlParser.LESS) | (1 << NqlParser.GREATER_EQUALS) | (1 << NqlParser.LESS_EQUALS))) !== 0)) {
	                this.state = 87;
	                localctx.op = this.compareOperator();
	            }

	            this.state = 90;
	            localctx.right = this.factor(0);
	            this.state = 91;
	            this.period();
	            break;

	        case 2:
	            localctx = new HistoricalStringMatchExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            localctx.value = this.factor(0);
	            this.state = 94;
	            this.match(NqlParser.WAS);
	            this.state = 96;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 95;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 98;
	            localctx.op = this.stringOperator();
	            this.state = 99;
	            localctx.pattern = this.factor(0);
	            this.state = 100;
	            this.period();
	            break;

	        case 3:
	            localctx = new HistoricalBetweenExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            localctx.value = this.factor(0);
	            this.state = 103;
	            this.match(NqlParser.WAS);
	            this.state = 105;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 104;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 107;
	            this.match(NqlParser.BETWEEN);
	            this.state = 108;
	            localctx.includeLower = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===NqlParser.LP || _la===NqlParser.LB)) {
	                localctx.includeLower = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 109;
	            localctx.lower = this.factor(0);
	            this.state = 110;
	            this.match(NqlParser.COMMA);
	            this.state = 111;
	            localctx.upper = this.factor(0);
	            this.state = 112;
	            localctx.includeUpper = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===NqlParser.RP || _la===NqlParser.RB)) {
	                localctx.includeUpper = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 113;
	            this.period();
	            break;

	        case 4:
	            localctx = new HistoricalCollectionMatchExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 115;
	            localctx.value = this.factor(0);
	            this.state = 116;
	            this.match(NqlParser.WAS);
	            this.state = 117;
	            localctx.op = this.collectionOperator();
	            this.state = 118;
	            localctx.collection = this.factor(0);
	            this.state = 119;
	            this.period();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compare() {
	    let localctx = new CompareContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, NqlParser.RULE_compare);
	    var _la = 0; // Token type
	    try {
	        this.state = 166;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExistsExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 123;
	            this.path();
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 124;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 127;
	            this.match(NqlParser.EXISTS);
	            break;

	        case 2:
	            localctx = new NumericCompareExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            localctx.left = this.factor(0);
	            this.state = 131;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 130;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 133;
	            localctx.op = this.compareOperator();
	            this.state = 134;
	            localctx.right = this.factor(0);
	            break;

	        case 3:
	            localctx = new StringMatchExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 136;
	            localctx.value = this.factor(0);
	            this.state = 138;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 137;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 140;
	            localctx.op = this.stringOperator();
	            this.state = 141;
	            localctx.pattern = this.factor(0);
	            break;

	        case 4:
	            localctx = new BetweenExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 143;
	            localctx.value = this.factor(0);
	            this.state = 144;
	            this.match(NqlParser.BETWEEN);
	            this.state = 145;
	            localctx.includeLower = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===NqlParser.LP || _la===NqlParser.LB)) {
	                localctx.includeLower = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 146;
	            localctx.lower = this.factor(0);
	            this.state = 147;
	            this.match(NqlParser.COMMA);
	            this.state = 148;
	            localctx.upper = this.factor(0);
	            this.state = 149;
	            localctx.includeUpper = this._input.LT(1);
	            _la = this._input.LA(1);
	            if(!(_la===NqlParser.RP || _la===NqlParser.RB)) {
	                localctx.includeUpper = this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            break;

	        case 5:
	            localctx = new CollectionMatchExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 151;
	            localctx.value = this.factor(0);
	            this.state = 152;
	            localctx.op = this.collectionOperator();
	            this.state = 153;
	            localctx.collection = this.factor(0);
	            break;

	        case 6:
	            localctx = new SatisfyExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 155;
	            this.match(NqlParser.ISSUE);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 156;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 159;
	            this.match(NqlParser.IN);
	            this.state = 160;
	            this.functionCall();
	            break;

	        case 7:
	            localctx = new SatisfyExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 162;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===NqlParser.NOT) {
	                this.state = 161;
	                this.match(NqlParser.NOT);
	            }

	            this.state = 164;
	            this.match(NqlParser.SATISFY);
	            this.state = 165;
	            this.functionCall();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	factor(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new FactorContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 12;
	    this.enterRecursionRule(localctx, 12, NqlParser.RULE_factor, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 198;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new RawValueExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 169;
	            this.raw();
	            break;

	        case 2:
	            localctx = new DurationExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 170;
	            this.duration();
	            break;

	        case 3:
	            localctx = new PathExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 171;
	            this.path();
	            break;

	        case 4:
	            localctx = new PrecededExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 172;
	            this.match(NqlParser.LP);
	            this.state = 173;
	            localctx.inner = this.factor(0);
	            this.state = 174;
	            this.match(NqlParser.RP);
	            break;

	        case 5:
	            localctx = new FunctionCallExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 176;
	            this.functionCall();
	            break;

	        case 6:
	            localctx = new MathNegativeExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 177;
	            this.match(NqlParser.SUBTRACT);
	            this.state = 178;
	            localctx.inner = this.factor(8);
	            break;

	        case 7:
	            localctx = new ConditionExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 179;
	            this.match(NqlParser.LP);
	            this.state = 180;
	            localctx.condition = this.logic(0);
	            this.state = 181;
	            this.match(NqlParser.QUESTION);
	            this.state = 182;
	            localctx.pass = this.factor(0);
	            this.state = 183;
	            this.match(NqlParser.COLON);
	            this.state = 184;
	            localctx.otherwise = this.factor(0);
	            this.state = 185;
	            this.match(NqlParser.RP);
	            break;

	        case 8:
	            localctx = new CommaListExprContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 187;
	            this.match(NqlParser.LB);
	            this.state = 188;
	            localctx._factor = this.factor(0);
	            localctx.elements.push(localctx._factor);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===NqlParser.COMMA) {
	                this.state = 189;
	                this.match(NqlParser.COMMA);
	                this.state = 190;
	                localctx._factor = this.factor(0);
	                localctx.elements.push(localctx._factor);
	                this.state = 195;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 196;
	            this.match(NqlParser.RB);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 217;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 215;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,18,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MathBinaryExprContext(this, new FactorContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, NqlParser.RULE_factor);
	                    this.state = 200;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 201;
	                    localctx.op = this.match(NqlParser.MULTIPLY);
	                    this.state = 202;
	                    localctx.right = this.factor(8);
	                    break;

	                case 2:
	                    localctx = new MathBinaryExprContext(this, new FactorContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, NqlParser.RULE_factor);
	                    this.state = 203;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 204;
	                    localctx.op = this.match(NqlParser.DIVIDE);
	                    this.state = 205;
	                    localctx.right = this.factor(7);
	                    break;

	                case 3:
	                    localctx = new MathBinaryExprContext(this, new FactorContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, NqlParser.RULE_factor);
	                    this.state = 206;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 207;
	                    localctx.op = this.match(NqlParser.MOD);
	                    this.state = 208;
	                    localctx.right = this.factor(6);
	                    break;

	                case 4:
	                    localctx = new MathBinaryExprContext(this, new FactorContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, NqlParser.RULE_factor);
	                    this.state = 209;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 210;
	                    localctx.op = this.match(NqlParser.ADD);
	                    this.state = 211;
	                    localctx.right = this.factor(5);
	                    break;

	                case 5:
	                    localctx = new MathBinaryExprContext(this, new FactorContext(this, _parentctx, _parentState));
	                    localctx.left = _prevctx;
	                    this.pushNewRecursionContext(localctx, _startState, NqlParser.RULE_factor);
	                    this.state = 212;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 213;
	                    localctx.op = this.match(NqlParser.SUBTRACT);
	                    this.state = 214;
	                    localctx.right = this.factor(4);
	                    break;

	                } 
	            }
	            this.state = 219;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, NqlParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 220;
	        localctx.functionName = this.match(NqlParser.ID);
	        this.state = 221;
	        this.match(NqlParser.LP);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NqlParser.LP) | (1 << NqlParser.LB) | (1 << NqlParser.TRUE) | (1 << NqlParser.FALSE))) !== 0) || ((((_la - 34)) & ~0x1f) == 0 && ((1 << (_la - 34)) & ((1 << (NqlParser.SUBTRACT - 34)) | (1 << (NqlParser.NULL - 34)) | (1 << (NqlParser.UNSIGN - 34)) | (1 << (NqlParser.DECIMAL - 34)) | (1 << (NqlParser.ID - 34)) | (1 << (NqlParser.KEY - 34)) | (1 << (NqlParser.MILLIS - 34)) | (1 << (NqlParser.SECONDS - 34)) | (1 << (NqlParser.MINUTES - 34)) | (1 << (NqlParser.HOURS - 34)) | (1 << (NqlParser.DAYS - 34)) | (1 << (NqlParser.WEEKS - 34)) | (1 << (NqlParser.DATE - 34)) | (1 << (NqlParser.DATETIME - 34)) | (1 << (NqlParser.STRING - 34)))) !== 0)) {
	            this.state = 222;
	            localctx._factor = this.factor(0);
	            localctx.args.push(localctx._factor);
	            this.state = 227;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===NqlParser.COMMA) {
	                this.state = 223;
	                this.match(NqlParser.COMMA);
	                this.state = 224;
	                localctx._factor = this.factor(0);
	                localctx.args.push(localctx._factor);
	                this.state = 229;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 232;
	        this.match(NqlParser.RP);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	path() {
	    let localctx = new PathContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, NqlParser.RULE_path);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 234;
	        localctx._pathElement = this.pathElement();
	        localctx.chain.push(localctx._pathElement);
	        this.state = 239;
	        this._errHandler.sync(this);
	        let _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 235;
	                this.match(NqlParser.DOT);
	                this.state = 236;
	                localctx._pathElement = this.pathElement();
	                localctx.chain.push(localctx._pathElement); 
	            }
	            this.state = 241;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	pathElement() {
	    let localctx = new PathElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, NqlParser.RULE_pathElement);
	    try {
	        this.state = 244;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NqlParser.ID:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 242;
	            localctx.id = this.match(NqlParser.ID);
	            break;
	        case NqlParser.KEY:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 243;
	            localctx.key = this.match(NqlParser.KEY);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	duration() {
	    let localctx = new DurationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, NqlParser.RULE_duration);
	    try {
	        this.state = 252;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case NqlParser.MILLIS:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 246;
	            localctx.amountMillis = this.match(NqlParser.MILLIS);
	            break;
	        case NqlParser.SECONDS:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 247;
	            localctx.amountSeconds = this.match(NqlParser.SECONDS);
	            break;
	        case NqlParser.MINUTES:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 248;
	            localctx.amountMinutes = this.match(NqlParser.MINUTES);
	            break;
	        case NqlParser.HOURS:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 249;
	            localctx.amountHours = this.match(NqlParser.HOURS);
	            break;
	        case NqlParser.DAYS:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 250;
	            localctx.amountDays = this.match(NqlParser.DAYS);
	            break;
	        case NqlParser.WEEKS:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 251;
	            localctx.amountWeeks = this.match(NqlParser.WEEKS);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	raw() {
	    let localctx = new RawContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, NqlParser.RULE_raw);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 254;
	        _la = this._input.LA(1);
	        if(!(_la===NqlParser.TRUE || _la===NqlParser.FALSE || ((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (NqlParser.NULL - 38)) | (1 << (NqlParser.UNSIGN - 38)) | (1 << (NqlParser.DECIMAL - 38)) | (1 << (NqlParser.DATE - 38)) | (1 << (NqlParser.DATETIME - 38)) | (1 << (NqlParser.STRING - 38)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sortDirection() {
	    let localctx = new SortDirectionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, NqlParser.RULE_sortDirection);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 256;
	        _la = this._input.LA(1);
	        if(!(_la===NqlParser.ASC || _la===NqlParser.DESC)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stringOperator() {
	    let localctx = new StringOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, NqlParser.RULE_stringOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 258;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NqlParser.REGEX_MATCH) | (1 << NqlParser.MATCH) | (1 << NqlParser.EXACTLY_MATCH))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	collectionOperator() {
	    let localctx = new CollectionOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, NqlParser.RULE_collectionOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 260;
	        _la = this._input.LA(1);
	        if(!(_la===NqlParser.IN || _la===NqlParser.NOT_IN)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	compareOperator() {
	    let localctx = new CompareOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, NqlParser.RULE_compareOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 262;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << NqlParser.EQUALS) | (1 << NqlParser.NOT_EQUALS) | (1 << NqlParser.GREATER) | (1 << NqlParser.LESS) | (1 << NqlParser.GREATER_EQUALS) | (1 << NqlParser.LESS_EQUALS))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicBinaryOp() {
	    let localctx = new LogicBinaryOpContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, NqlParser.RULE_logicBinaryOp);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 264;
	        _la = this._input.LA(1);
	        if(!(_la===NqlParser.AND || _la===NqlParser.OR)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

NqlParser.EOF = antlr4.Token.EOF;
NqlParser.UNDERSCORE = 1;
NqlParser.LP = 2;
NqlParser.RP = 3;
NqlParser.LB = 4;
NqlParser.RB = 5;
NqlParser.PIPE = 6;
NqlParser.QUESTION = 7;
NqlParser.COLON = 8;
NqlParser.SEMI_COLON = 9;
NqlParser.DOT = 10;
NqlParser.COMMA = 11;
NqlParser.AS = 12;
NqlParser.TRUE = 13;
NqlParser.FALSE = 14;
NqlParser.BETWEEN = 15;
NqlParser.EQUALS = 16;
NqlParser.NOT_EQUALS = 17;
NqlParser.GREATER = 18;
NqlParser.LESS = 19;
NqlParser.GREATER_EQUALS = 20;
NqlParser.LESS_EQUALS = 21;
NqlParser.REGEX_MATCH = 22;
NqlParser.MATCH = 23;
NqlParser.EXACTLY_MATCH = 24;
NqlParser.WAS = 25;
NqlParser.DURING = 26;
NqlParser.BEFORE = 27;
NqlParser.AFTER = 28;
NqlParser.NOT = 29;
NqlParser.AND = 30;
NqlParser.OR = 31;
NqlParser.XOR = 32;
NqlParser.ADD = 33;
NqlParser.SUBTRACT = 34;
NqlParser.MULTIPLY = 35;
NqlParser.DIVIDE = 36;
NqlParser.MOD = 37;
NqlParser.NULL = 38;
NqlParser.IN = 39;
NqlParser.NOT_IN = 40;
NqlParser.ORDERBY = 41;
NqlParser.ASC = 42;
NqlParser.DESC = 43;
NqlParser.ISSUE = 44;
NqlParser.SATISFY = 45;
NqlParser.EXISTS = 46;
NqlParser.UNSIGN = 47;
NqlParser.DECIMAL = 48;
NqlParser.ID = 49;
NqlParser.KEY = 50;
NqlParser.MILLIS = 51;
NqlParser.SECONDS = 52;
NqlParser.MINUTES = 53;
NqlParser.HOURS = 54;
NqlParser.DAYS = 55;
NqlParser.WEEKS = 56;
NqlParser.DATE = 57;
NqlParser.DATETIME = 58;
NqlParser.STRING = 59;
NqlParser.WS = 60;

NqlParser.RULE_query = 0;
NqlParser.RULE_sortTuple = 1;
NqlParser.RULE_logic = 2;
NqlParser.RULE_period = 3;
NqlParser.RULE_historicalCompare = 4;
NqlParser.RULE_compare = 5;
NqlParser.RULE_factor = 6;
NqlParser.RULE_functionCall = 7;
NqlParser.RULE_path = 8;
NqlParser.RULE_pathElement = 9;
NqlParser.RULE_duration = 10;
NqlParser.RULE_raw = 11;
NqlParser.RULE_sortDirection = 12;
NqlParser.RULE_stringOperator = 13;
NqlParser.RULE_collectionOperator = 14;
NqlParser.RULE_compareOperator = 15;
NqlParser.RULE_logicBinaryOp = 16;

class QueryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_query;
        this._sortTuple = null; // SortTupleContext
        this.sortTuples = []; // of SortTupleContexts
    }

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	ORDERBY() {
	    return this.getToken(NqlParser.ORDERBY, 0);
	};

	sortTuple = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SortTupleContext);
	    } else {
	        return this.getTypedRuleContext(SortTupleContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NqlParser.COMMA);
	    } else {
	        return this.getToken(NqlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterQuery(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitQuery(this);
		}
	}


}



class SortTupleContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_sortTuple;
    }

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	sortDirection() {
	    return this.getTypedRuleContext(SortDirectionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterSortTuple(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitSortTuple(this);
		}
	}


}



class LogicContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_logic;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicPrecededExprContext extends LogicContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // LogicContext;
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterLogicPrecededExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitLogicPrecededExpr(this);
		}
	}


}

NqlParser.LogicPrecededExprContext = LogicPrecededExprContext;

class LogicHistoricalCompareExprContext extends LogicContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	historicalCompare() {
	    return this.getTypedRuleContext(HistoricalCompareContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterLogicHistoricalCompareExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitLogicHistoricalCompareExpr(this);
		}
	}


}

NqlParser.LogicHistoricalCompareExprContext = LogicHistoricalCompareExprContext;

class LogicCompareExprContext extends LogicContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	compare() {
	    return this.getTypedRuleContext(CompareContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterLogicCompareExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitLogicCompareExpr(this);
		}
	}


}

NqlParser.LogicCompareExprContext = LogicCompareExprContext;

class LogicBinaryExprContext extends LogicContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // LogicContext;
        this.op = null; // LogicBinaryOpContext;
        this.right = null; // LogicContext;
        super.copyFrom(ctx);
    }

	logic = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicContext);
	    } else {
	        return this.getTypedRuleContext(LogicContext,i);
	    }
	};

	logicBinaryOp() {
	    return this.getTypedRuleContext(LogicBinaryOpContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterLogicBinaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitLogicBinaryExpr(this);
		}
	}


}

NqlParser.LogicBinaryExprContext = LogicBinaryExprContext;

class LogicNotExprContext extends LogicContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // LogicContext;
        super.copyFrom(ctx);
    }

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterLogicNotExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitLogicNotExpr(this);
		}
	}


}

NqlParser.LogicNotExprContext = LogicNotExprContext;

class PeriodContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_period;
        this.from = null; // FactorContext
        this.to = null; // FactorContext
    }

	BEFORE() {
	    return this.getToken(NqlParser.BEFORE, 0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	AFTER() {
	    return this.getToken(NqlParser.AFTER, 0);
	};

	DURING() {
	    return this.getToken(NqlParser.DURING, 0);
	};

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	COMMA() {
	    return this.getToken(NqlParser.COMMA, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterPeriod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitPeriod(this);
		}
	}


}



class HistoricalCompareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_historicalCompare;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class HistoricalStringMatchExprContext extends HistoricalCompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null; // FactorContext;
        this.op = null; // StringOperatorContext;
        this.pattern = null; // FactorContext;
        super.copyFrom(ctx);
    }

	WAS() {
	    return this.getToken(NqlParser.WAS, 0);
	};

	period() {
	    return this.getTypedRuleContext(PeriodContext,0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	stringOperator() {
	    return this.getTypedRuleContext(StringOperatorContext,0);
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterHistoricalStringMatchExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitHistoricalStringMatchExpr(this);
		}
	}


}

NqlParser.HistoricalStringMatchExprContext = HistoricalStringMatchExprContext;

class HistoricalBetweenExprContext extends HistoricalCompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null; // FactorContext;
        this.includeLower = null; // Token;
        this.lower = null; // FactorContext;
        this.upper = null; // FactorContext;
        this.includeUpper = null; // Token;
        super.copyFrom(ctx);
    }

	WAS() {
	    return this.getToken(NqlParser.WAS, 0);
	};

	BETWEEN() {
	    return this.getToken(NqlParser.BETWEEN, 0);
	};

	COMMA() {
	    return this.getToken(NqlParser.COMMA, 0);
	};

	period() {
	    return this.getTypedRuleContext(PeriodContext,0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	LB() {
	    return this.getToken(NqlParser.LB, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	RB() {
	    return this.getToken(NqlParser.RB, 0);
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterHistoricalBetweenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitHistoricalBetweenExpr(this);
		}
	}


}

NqlParser.HistoricalBetweenExprContext = HistoricalBetweenExprContext;

class HistoricalNumericCompareExprContext extends HistoricalCompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FactorContext;
        this.op = null; // CompareOperatorContext;
        this.right = null; // FactorContext;
        super.copyFrom(ctx);
    }

	WAS() {
	    return this.getToken(NqlParser.WAS, 0);
	};

	period() {
	    return this.getTypedRuleContext(PeriodContext,0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	compareOperator() {
	    return this.getTypedRuleContext(CompareOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterHistoricalNumericCompareExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitHistoricalNumericCompareExpr(this);
		}
	}


}

NqlParser.HistoricalNumericCompareExprContext = HistoricalNumericCompareExprContext;

class HistoricalCollectionMatchExprContext extends HistoricalCompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null; // FactorContext;
        this.op = null; // CollectionOperatorContext;
        this.collection = null; // FactorContext;
        super.copyFrom(ctx);
    }

	WAS() {
	    return this.getToken(NqlParser.WAS, 0);
	};

	period() {
	    return this.getTypedRuleContext(PeriodContext,0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	collectionOperator() {
	    return this.getTypedRuleContext(CollectionOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterHistoricalCollectionMatchExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitHistoricalCollectionMatchExpr(this);
		}
	}


}

NqlParser.HistoricalCollectionMatchExprContext = HistoricalCollectionMatchExprContext;

class CompareContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_compare;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StringMatchExprContext extends CompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null; // FactorContext;
        this.op = null; // StringOperatorContext;
        this.pattern = null; // FactorContext;
        super.copyFrom(ctx);
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	stringOperator() {
	    return this.getTypedRuleContext(StringOperatorContext,0);
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterStringMatchExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitStringMatchExpr(this);
		}
	}


}

NqlParser.StringMatchExprContext = StringMatchExprContext;

class CollectionMatchExprContext extends CompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null; // FactorContext;
        this.op = null; // CollectionOperatorContext;
        this.collection = null; // FactorContext;
        super.copyFrom(ctx);
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	collectionOperator() {
	    return this.getTypedRuleContext(CollectionOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterCollectionMatchExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitCollectionMatchExpr(this);
		}
	}


}

NqlParser.CollectionMatchExprContext = CollectionMatchExprContext;

class SatisfyExprContext extends CompareContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ISSUE() {
	    return this.getToken(NqlParser.ISSUE, 0);
	};

	IN() {
	    return this.getToken(NqlParser.IN, 0);
	};

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	SATISFY() {
	    return this.getToken(NqlParser.SATISFY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterSatisfyExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitSatisfyExpr(this);
		}
	}


}

NqlParser.SatisfyExprContext = SatisfyExprContext;

class ExistsExprContext extends CompareContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	EXISTS() {
	    return this.getToken(NqlParser.EXISTS, 0);
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterExistsExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitExistsExpr(this);
		}
	}


}

NqlParser.ExistsExprContext = ExistsExprContext;

class NumericCompareExprContext extends CompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FactorContext;
        this.op = null; // CompareOperatorContext;
        this.right = null; // FactorContext;
        super.copyFrom(ctx);
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	compareOperator() {
	    return this.getTypedRuleContext(CompareOperatorContext,0);
	};

	NOT() {
	    return this.getToken(NqlParser.NOT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterNumericCompareExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitNumericCompareExpr(this);
		}
	}


}

NqlParser.NumericCompareExprContext = NumericCompareExprContext;

class BetweenExprContext extends CompareContext {

    constructor(parser, ctx) {
        super(parser);
        this.value = null; // FactorContext;
        this.includeLower = null; // Token;
        this.lower = null; // FactorContext;
        this.upper = null; // FactorContext;
        this.includeUpper = null; // Token;
        super.copyFrom(ctx);
    }

	BETWEEN() {
	    return this.getToken(NqlParser.BETWEEN, 0);
	};

	COMMA() {
	    return this.getToken(NqlParser.COMMA, 0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	LB() {
	    return this.getToken(NqlParser.LB, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	RB() {
	    return this.getToken(NqlParser.RB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterBetweenExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitBetweenExpr(this);
		}
	}


}

NqlParser.BetweenExprContext = BetweenExprContext;

class FactorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_factor;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class RawValueExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	raw() {
	    return this.getTypedRuleContext(RawContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterRawValueExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitRawValueExpr(this);
		}
	}


}

NqlParser.RawValueExprContext = RawValueExprContext;

class PrecededExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FactorContext;
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterPrecededExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitPrecededExpr(this);
		}
	}


}

NqlParser.PrecededExprContext = PrecededExprContext;

class MathNegativeExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        this.inner = null; // FactorContext;
        super.copyFrom(ctx);
    }

	SUBTRACT() {
	    return this.getToken(NqlParser.SUBTRACT, 0);
	};

	factor() {
	    return this.getTypedRuleContext(FactorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterMathNegativeExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitMathNegativeExpr(this);
		}
	}


}

NqlParser.MathNegativeExprContext = MathNegativeExprContext;

class MathBinaryExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        this.left = null; // FactorContext;
        this.op = null; // Token;
        this.right = null; // FactorContext;
        super.copyFrom(ctx);
    }

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	MULTIPLY() {
	    return this.getToken(NqlParser.MULTIPLY, 0);
	};

	DIVIDE() {
	    return this.getToken(NqlParser.DIVIDE, 0);
	};

	MOD() {
	    return this.getToken(NqlParser.MOD, 0);
	};

	ADD() {
	    return this.getToken(NqlParser.ADD, 0);
	};

	SUBTRACT() {
	    return this.getToken(NqlParser.SUBTRACT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterMathBinaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitMathBinaryExpr(this);
		}
	}


}

NqlParser.MathBinaryExprContext = MathBinaryExprContext;

class DurationExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	duration() {
	    return this.getTypedRuleContext(DurationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterDurationExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitDurationExpr(this);
		}
	}


}

NqlParser.DurationExprContext = DurationExprContext;

class PathExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	path() {
	    return this.getTypedRuleContext(PathContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterPathExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitPathExpr(this);
		}
	}


}

NqlParser.PathExprContext = PathExprContext;

class CommaListExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        this._factor = null; // FactorContext;
        this.elements = []; // of FactorContexts;
        super.copyFrom(ctx);
    }

	LB() {
	    return this.getToken(NqlParser.LB, 0);
	};

	RB() {
	    return this.getToken(NqlParser.RB, 0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NqlParser.COMMA);
	    } else {
	        return this.getToken(NqlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterCommaListExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitCommaListExpr(this);
		}
	}


}

NqlParser.CommaListExprContext = CommaListExprContext;

class FunctionCallExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterFunctionCallExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitFunctionCallExpr(this);
		}
	}


}

NqlParser.FunctionCallExprContext = FunctionCallExprContext;

class ConditionExprContext extends FactorContext {

    constructor(parser, ctx) {
        super(parser);
        this.condition = null; // LogicContext;
        this.pass = null; // FactorContext;
        this.otherwise = null; // FactorContext;
        super.copyFrom(ctx);
    }

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	QUESTION() {
	    return this.getToken(NqlParser.QUESTION, 0);
	};

	COLON() {
	    return this.getToken(NqlParser.COLON, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	logic() {
	    return this.getTypedRuleContext(LogicContext,0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterConditionExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitConditionExpr(this);
		}
	}


}

NqlParser.ConditionExprContext = ConditionExprContext;

class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_functionCall;
        this.functionName = null; // Token
        this._factor = null; // FactorContext
        this.args = []; // of FactorContexts
    }

	LP() {
	    return this.getToken(NqlParser.LP, 0);
	};

	RP() {
	    return this.getToken(NqlParser.RP, 0);
	};

	ID() {
	    return this.getToken(NqlParser.ID, 0);
	};

	factor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FactorContext);
	    } else {
	        return this.getTypedRuleContext(FactorContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NqlParser.COMMA);
	    } else {
	        return this.getToken(NqlParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}


}



class PathContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_path;
        this._pathElement = null; // PathElementContext
        this.chain = []; // of PathElementContexts
    }

	pathElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PathElementContext);
	    } else {
	        return this.getTypedRuleContext(PathElementContext,i);
	    }
	};

	DOT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(NqlParser.DOT);
	    } else {
	        return this.getToken(NqlParser.DOT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterPath(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitPath(this);
		}
	}


}



class PathElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_pathElement;
        this.id = null; // Token
        this.key = null; // Token
    }

	ID() {
	    return this.getToken(NqlParser.ID, 0);
	};

	KEY() {
	    return this.getToken(NqlParser.KEY, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterPathElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitPathElement(this);
		}
	}


}



class DurationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_duration;
        this.amountMillis = null; // Token
        this.amountSeconds = null; // Token
        this.amountMinutes = null; // Token
        this.amountHours = null; // Token
        this.amountDays = null; // Token
        this.amountWeeks = null; // Token
    }

	MILLIS() {
	    return this.getToken(NqlParser.MILLIS, 0);
	};

	SECONDS() {
	    return this.getToken(NqlParser.SECONDS, 0);
	};

	MINUTES() {
	    return this.getToken(NqlParser.MINUTES, 0);
	};

	HOURS() {
	    return this.getToken(NqlParser.HOURS, 0);
	};

	DAYS() {
	    return this.getToken(NqlParser.DAYS, 0);
	};

	WEEKS() {
	    return this.getToken(NqlParser.WEEKS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterDuration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitDuration(this);
		}
	}


}



class RawContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_raw;
    }

	NULL() {
	    return this.getToken(NqlParser.NULL, 0);
	};

	TRUE() {
	    return this.getToken(NqlParser.TRUE, 0);
	};

	FALSE() {
	    return this.getToken(NqlParser.FALSE, 0);
	};

	UNSIGN() {
	    return this.getToken(NqlParser.UNSIGN, 0);
	};

	DECIMAL() {
	    return this.getToken(NqlParser.DECIMAL, 0);
	};

	STRING() {
	    return this.getToken(NqlParser.STRING, 0);
	};

	DATE() {
	    return this.getToken(NqlParser.DATE, 0);
	};

	DATETIME() {
	    return this.getToken(NqlParser.DATETIME, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterRaw(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitRaw(this);
		}
	}


}



class SortDirectionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_sortDirection;
    }

	ASC() {
	    return this.getToken(NqlParser.ASC, 0);
	};

	DESC() {
	    return this.getToken(NqlParser.DESC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterSortDirection(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitSortDirection(this);
		}
	}


}



class StringOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_stringOperator;
    }

	MATCH() {
	    return this.getToken(NqlParser.MATCH, 0);
	};

	EXACTLY_MATCH() {
	    return this.getToken(NqlParser.EXACTLY_MATCH, 0);
	};

	REGEX_MATCH() {
	    return this.getToken(NqlParser.REGEX_MATCH, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterStringOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitStringOperator(this);
		}
	}


}



class CollectionOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_collectionOperator;
    }

	IN() {
	    return this.getToken(NqlParser.IN, 0);
	};

	NOT_IN() {
	    return this.getToken(NqlParser.NOT_IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterCollectionOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitCollectionOperator(this);
		}
	}


}



class CompareOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_compareOperator;
    }

	EQUALS() {
	    return this.getToken(NqlParser.EQUALS, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(NqlParser.NOT_EQUALS, 0);
	};

	GREATER() {
	    return this.getToken(NqlParser.GREATER, 0);
	};

	GREATER_EQUALS() {
	    return this.getToken(NqlParser.GREATER_EQUALS, 0);
	};

	LESS() {
	    return this.getToken(NqlParser.LESS, 0);
	};

	LESS_EQUALS() {
	    return this.getToken(NqlParser.LESS_EQUALS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterCompareOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitCompareOperator(this);
		}
	}


}



class LogicBinaryOpContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = NqlParser.RULE_logicBinaryOp;
    }

	AND() {
	    return this.getToken(NqlParser.AND, 0);
	};

	OR() {
	    return this.getToken(NqlParser.OR, 0);
	};

	enterRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.enterLogicBinaryOp(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof NqlParserListener ) {
	        listener.exitLogicBinaryOp(this);
		}
	}


}




NqlParser.QueryContext = QueryContext; 
NqlParser.SortTupleContext = SortTupleContext; 
NqlParser.LogicContext = LogicContext; 
NqlParser.PeriodContext = PeriodContext; 
NqlParser.HistoricalCompareContext = HistoricalCompareContext; 
NqlParser.CompareContext = CompareContext; 
NqlParser.FactorContext = FactorContext; 
NqlParser.FunctionCallContext = FunctionCallContext; 
NqlParser.PathContext = PathContext; 
NqlParser.PathElementContext = PathElementContext; 
NqlParser.DurationContext = DurationContext; 
NqlParser.RawContext = RawContext; 
NqlParser.SortDirectionContext = SortDirectionContext; 
NqlParser.StringOperatorContext = StringOperatorContext; 
NqlParser.CollectionOperatorContext = CollectionOperatorContext; 
NqlParser.CompareOperatorContext = CompareOperatorContext; 
NqlParser.LogicBinaryOpContext = LogicBinaryOpContext; 
