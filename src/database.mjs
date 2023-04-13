
/*
    Data model for each programming language entry:

    interface ProgrammingLanguageDescription {
        name: string;                           
        source_languages: string | string[];    // eg. `pascal | basic` or ['pascal', 'basic']
        target_languages: string | string[];    // eg. `c | c++` or ['c', 'c++']
        notes: string;
        links: {
            web: string | string[];
            repo: string | string[];
            doc: string | string[];
        }
    }
*/


export const database = [
    {
        "name":             "Yaksha",
        "source_languages": "Python",
        "target_languages": "C",
        "notes":            "Transpiles \"Python like\" programming language to C",
        "links": {
            "web":          "https://yakshalang.github.io/",
            "repo":         "https://github.com/YakshaLang",
            "doc":          "https://yakshalang.github.io/documentation.html"
        }
    },
    {
        "name":             "prometeo",
        "source_languages": "Python",
        "target_languages": "C",
        "notes":            "Transpiles subset of Python",
        "links": {
            "repo":         "https://github.com/zanellia/prometeo",
            "doc":          "https://prometeo.readthedocs.io/en/latest/index.html"
        }
    },
    {
        "name":             "PtoC",
        "source_languages": "pascal | Turbo Pascal | Oregon Pascal | ISO Pascal | Sun Pascal | HP Pascal",
        "target_languages": "C | C++",
        "notes":            "Transpiles to readable code",
        "links": {
            "repo":         "https://github.com/knizhnik/ptoc/",
        }
    },
    {
        "name":             "nullc",
        "source_languages": "nullc",
        "target_languages": "C | x86 | VM",
        "notes":            "It is a C-like programming language",
        "links": {
            "repo":         "https://github.com/WheretIB/nullc",
            "doc":          "https://github.com/WheretIB/nullc/wiki/Language-Reference"
        }
    },
    {
        "name":             "go2cpp",
        "source_languages": "Go",
        "target_languages": "C++",
        "notes":            "Designed to help port Go to C++",
        "links": {
            "repo":         "https://github.com/xyproto/go2cpp",
        }
    },
    {
        "name":             "TMPPy",
        "source_languages": "TMPPy | Python",
        "target_languages": "C++",
        "notes":            "Transpiles a subset of Python",
        "links": {
            "repo":         "https://github.com/google/tmppy",
            "doc":          "https://github.com/google/tmppy/wiki"
        }
    },
    {
        "name":             "GoLite",
        "source_languages": "GoLite | Go",
        "target_languages": "C++",
        "notes":            "Transpiles a strict subset of Go",
        "links": {
            "repo":         "https://github.com/vaquierm/GoLite_Transpiler",
        }
    },
    {
        "name":             "Alumina",
        "source_languages": "Alumina",
        "target_languages": "C",
        "notes":            "Inspired by Rust",
        "links": {
            "web":          "https://docs.alumina-lang.net/",
            "repo":         "https://github.com/alumina-lang/alumina",
        }
    },
    {
        "name":             "Cforall",
        "source_languages": "Cforall | C",
        "target_languages": "C",
        "notes":            "Extends ISO C and outputs augmented C code",
        "links": {
            "web":          "https://cforall.uwaterloo.ca/",
            "repo":         "https://github.com/cforall/cforall",
            "doc":          "https://cforall.uwaterloo.ca/doc/user.pdf"
        }
    },
    {
        "name":             "m",
        "source_languages": "m",
        "target_languages": "C | WebAssembly",
        "notes":            "It targets webassembly but actually it compiles to C and then requires to trigger manually clang to get webassembly",
        "links": {
            "web":          "https://mlang.dev/",
            "repo":         "https://github.com/ligangwang/m"
        }
    },
    {
        "name":             "ATS",
        "source_languages": "ATS",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.ats-lang.org/"
        }
    },
    {
        "name":             "BaCon (Basic Converter)",
        "source_languages": "Basic",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://basic-converter.org/"
        }
    },
    {
        "name":             "bc9Basic",
        "source_languages": "Basic",
        "target_languages": "C",
        "notes":            "Can generate C or C++ code. Runs only on Windows but can generate code for *nix. A fork of [BCX](http://bcx-basic.sourceforge.net/) that outputs valid ISO/ANSI C. [Website archive](http://web.archive.org/web/20160405001529/http://bc9.bcxbasic.com/).",
        "links": {
            "web":          "https://sourceforge.net/projects/bc9basic/"
        }
    },
    {
        "name":             "Bigloo",
        "source_languages": "Scheme",
        "target_languages": "C",
        "notes":            "Scheme (R5RS)",
        "links": {
            "web":          "http://www-sop.inria.fr/mimosa/fp/Bigloo/"
        }
    },
    {
        "name":             "Blech",
        "source_languages": "Blech",
        "target_languages": "C",
        "notes":            "A synchronous programming language for embedded reactive real-time-critical software.",
        "links": {
            "repo":         "https://github.com/boschresearch/blech"
        }
    },
    {
        "name":             "bmx-ng",
        "source_languages": "BlitzMax",
        "target_languages": "C",
        "notes":            "A Monkey-derived BlitzMax to C transpiler.",
        "links": {
            "repo":         "https://github.com/bmx-ng/bcc"
        }
    },
    {
        "name":             "Carp",
        "source_languages": "Carp | Lisp",
        "target_languages": "C",
        "notes":            "A statically typed lisp, without a GC, for real-time applications.",
        "links": {
            "repo":         "https://github.com/carp-lang/carp"
        }
    },
    {
        "name":             "Chapel",
        "source_languages": "Chapel",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://chapel.cray.com/"
        }
    },
    {
        "name":             "CHICKEN Scheme",
        "source_languages": "Scheme",
        "target_languages": "C",
        "notes":            "Scheme (R5RS)",
        "links": {
            "web":          "http://www.call-cc.org/"
        }
    },
    {
        "name":             "Ciao",
        "source_languages": "Prolog",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://ciao-lang.org/"
        }
    },
    {
        "name":             "cito",
        "source_languages": "Ć",
        "target_languages": "C",
        "notes":            "A language for making portable libraries with a syntax like C#. Also targets Java, C#, JavaScript, ActionScript, Perl 5 and D.",
        "links": {
            "web":          "http://cito.sourceforge.net/"
        }
    },
    {
        "name":             "CLiCC",
        "source_languages": "Common Lisp",
        "target_languages": "C",
        "notes":            "Compiles a large strict subset of Common Lisp + CLOS to C.",
        "links": {
            "repo":         "https://github.com/plops/clicc"
        }
    },
    {
        "name":             "Critical Mass Modula-3",
        "source_languages": "Modula-3",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/modula3/cm3"
        }
    },
    {
        "name":             "Cyclone",
        "source_languages": "Scheme",
        "target_languages": "C",
        "notes":            "Scheme (R7RS). Cheney on the M.T.A. with native threads.",
        "links": {
            "repo":         "https://github.com/justinethier/cyclone"
        }
    },
    {
        "name":             "Cython",
        "source_languages": "Python",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://cython.org"
        }
    },
    {
        "name":             "Céu",
        "source_languages": "Céu",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.ceu-lang.org/"
        }
    },
    {
        "name":             "eC",
        "source_languages": "eC",
        "target_languages": "C",
        "notes":            "An object-oriented superset of C with modules and generics.",
        "links": {
            "web":          "http://ec-lang.org/"
        }
    },
    {
        "name":             "EiffelStudio",
        "source_languages": "Eiffel",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "https://www.eiffel.com/eiffelstudio/"
        }
    },
    {
        "name":             "Embeddable Common-Lisp",
        "source_languages": "Common Lisp",
        "target_languages": "C",
        "notes":            "ANSI Common Lisp",
        "links": {
            "web":          "https://common-lisp.net/project/ecl/"
        }
    },
    {
        "name":             "Emfrp",
        "source_languages": "Emfrp",
        "target_languages": "C",
        "notes":            "A pure functional reactive programming language for small-scale embedded systems.",
        "links": {
            "repo":         "https://github.com/sawaken/emfrp"
        }
    },
    {
        "name":             "Emgo",
        "source_languages": "Go",
        "target_languages": "C",
        "notes":            "Compiles a subset of Go for 32-bit microcontrollers through C.",
        "links": {
            "repo":         "https://github.com/ziutek/emgo"
        }
    },
    {
        "name":             "Epic",
        "source_languages": "Epic",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "https://eb.host.cs.st-andrews.ac.uk/epic.php"
        }
    },
    {
        "name":             "Esotope Brainfuck Compiler",
        "source_languages": "Brainfuck",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/lifthrasiir/esotope-bfc"
        }
    },
    {
        "name":             "Euphoria to C Translator",
        "source_languages": "Euphoria",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "https://openeuphoria.org/docs/e2c.html"
        }
    },
    {
        "name":             "f2c",
        "source_languages": "Fortran 77",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.netlib.org/f2c/"
        }
    },
    {
        "name":             "Felix",
        "source_languages": "Felix",
        "target_languages": "C++",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/felix-lang/felix"
        }
    },
    {
        "name":             "FreeBASIC",
        "source_languages": "Basic",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "https://www.freebasic.net/"
        }
    },
    {
        "name":             "Futhark",
        "source_languages": "Futhark",
        "target_languages": "C",
        "notes":            "Purely functional data-parallel language generating OpenCL C",
        "links": {
            "repo":         "https://github.com/HIPERFIT/futhark"
        }
    },
    {
        "name":             "Gambit",
        "source_languages": "Scheme",
        "target_languages": "C",
        "notes":            "Scheme (R5RS)",
        "links": {
            "web":          "http://gambitscheme.org/"
        }
    },
    {
        "name":             "GCL",
        "source_languages": "Common Lisp",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.gnu.org/software/gcl/"
        }
    },
    {
        "name":             "Genie",
        "source_languages": "Genie",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://live.gnome.org/Genie"
        }
    },
    {
        "name":             "GHC",
        "source_languages": "Haskell",
        "target_languages": "C",
        "notes":            "[C backend](https://downloads.haskell.org/~ghc/7.6.3/docs/html/users_guide/code-generators.html) documentation page.",
        "links": {
            "web":          "https://www.haskell.org/ghc/"
        }
    },
    {
        "name":             "GnuCOBOL",
        "source_languages": "COBOL",
        "target_languages": "C",
        "notes":            "COBOL 2014 with extensions",
        "links": {
            "web":          "http://open-cobol.sourceforge.net/"
        }
    },
    {
        "name":             "Harbour",
        "source_languages": "xBase | CA-Clipper",
        "target_languages": "C",
        "notes":            "xBase compatible with CA-Clipper",
        "links": {
            "repo":         "https://github.com/harbour/core/"
        }
    },
    {
        "name":             "Haxe",
        "source_languages": "Haxe",
        "target_languages": "C | C++",
        "notes":            "",
        "links": {
            "web":          "http://haxe.org"
        }
    },
    {
        "name":             "Idris",
        "source_languages": "Idris",
        "target_languages": "C",
        "notes":            "A pure functional programming language with dependent types.",
        "links": {
            "web":          "http://www.idris-lang.org/"
        }
    },
    {
        "name":             "Ivory",
        "source_languages": "Ivory",
        "target_languages": "C",
        "notes":            "A Haskell eDSL for safe systems programming.",
        "links": {
            "web":          "http://ivorylang.org/"
        }
    },
    {
        "name":             "jhc",
        "source_languages": "Haskell 98",
        "target_languages": "C",
        "notes":            "The resulting code doesn't use a garbage collector.",
        "links": {
            "web":          "http://repetae.net/computer/jhc/"
        }
    },
    {
        "name":             "Kit",
        "source_languages": "Kit",
        "target_languages": "C",
        "notes":            "A statically typed procedural language with manual MM, traits, pattern matching, and metaprogramming designed with game development in mind.",
        "links": {
            "web":          "https://www.kitlang.org/"
        }
    },
    {
        "name":             "Language84",
        "source_languages": "Language84",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://norstrulde.org/language84/"
        }
    },
    {
        "name":             "mbeddr",
        "source_languages": "mbeddr",
        "target_languages": "C",
        "notes":            "A set of languages for embedded software engineering.",
        "links": {
            "web":          "http://mbeddr.com/"
        }
    },
    {
        "name":             "ManKai Common Lisp",
        "source_languages": "Common Lisp",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "https://common-lisp.net/project/mkcl/"
        }
    },
    {
        "name":             "matiec",
        "source_languages": "ST | IL | SFC",
        "target_languages": "C",
        "notes":            "A set of textual languages for PLC programming. (SFC: IEC 61131)",
        "links": {
            "repo":         "https://github.com/nucleron/matiec"
        }
    },
    {
        "name":             "Mercury",
        "source_languages": "Mercury",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.mercurylang.org/"
        }
    },
    {
        "name":             "MLton",
        "source_languages": "Standard ML",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://mlton.org/"
        }
    },
    {
        "name":             "Monkey 2",
        "source_languages": "Monkey 2",
        "target_languages": "C++",
        "notes":            "",
        "links": {
            "web":          "http://monkeycoder.co.nz/"
        }
    },
    {
        "name":             "Mrustc",
        "source_languages": "Rust",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/thepowersgang/mrustc"
        }
    },
    {
        "name":             "NectarJS",
        "source_languages": "JavaScript",
        "target_languages": "C",
        "notes":            "The primary target is WebAssembly. [How to compile to C](https://github.com/NectarJS/nectarjs/issues/46#issuecomment-498532350).",
        "links": {
            "repo":         "https://github.com/NectarJS/nectarjs"
        }
    },
    {
        "name":             "Nelua",
        "source_languages": "Nelua",
        "target_languages": "C",
        "notes":            "A statically-typed meta-programmable systems programming language heavily inspired by Lua.",
        "links": {
            "web":          "https://nelua.io"
        }
    },
    {
        "name":             "Nim",
        "source_languages": "Nim",
        "target_languages": "C | C++ | Objective C",
        "notes":            "",
        "links": {
            "web":          "http://nim-lang.org"
        }
    },
    {
        "name":             "Nit",
        "source_languages": "Nit",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://nitlanguage.org/"
        }
    },
    {
        "name":             "NN-512",
        "source_languages": "NN-512",
        "target_languages": "C",
        "notes":            "Graph language. Generate C99 code for neural net inference.",
        "links": {
            "web":          "https://nn-512.com/"
        }
    },
    {
        "name":             "Nuitka",
        "source_languages": "Python",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://nuitka.net/"
        }
    },
    {
        "name":             "OBNC",
        "source_languages": "Oberon",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.miasap.se/obnc/"
        }
    },
    {
        "name":             "ocamlcc",
        "source_languages": "OCaml",
        "target_languages": "C",
        "notes":            "Compiles OCaml bytecode to C.",
        "links": {
            "repo":         "https://github.com/ocaml-bytes/ocamlcc"
        }
    },
    {
        "name":             "oi",
        "source_languages": "oi",
        "target_languages": "C",
        "notes":            "C with traits. Compiles to code that can be directly used from plain C.",
        "links": {
            "repo":         "https://github.com/hodefoting/oi/"
        }
    },
    {
        "name":             "ooc",
        "source_languages": "ooc",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://ooc-lang.org"
        }
    },
    {
        "name":             "OpenDylan",
        "source_languages": "Dylan",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://opendylan.org/"
        }
    },
    {
        "name":             "p2c",
        "source_languages": "Pascal | UCSD | Turbo Pascal | Modula-2",
        "target_languages": "C | C++",
        "notes":            "Supports several Pascal dialects, including UCSD and Turbo Pascal, Modula-2.",
        "links": {
            "web":          "http://users.fred.net/tds/lab/p2c/"
        }
    },
    {
        "name":             "ParparVM",
        "source_languages": "Java bytecode",
        "target_languages": "C",
        "notes":            "Use for the Java to iOS portability part of the [Codename One](https://www.codenameone.com/) project.",
        "links": {
            "repo":         "https://github.com/codenameone/CodenameOne/tree/master/vm"
        }
    },
    {
        "name":             "perlcc",
        "source_languages": "Perl 5",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://search.cpan.org/dist/B-C/"
        }
    },
    {
        "name":             "purescript-native",
        "source_languages": "PureScript",
        "target_languages": "C++",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/andyarvanitis/purescript-native"
        }
    },
    {
        "name":             "Py14",
        "source_languages": "Python",
        "target_languages": "C++",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/lukasmartinelli/py14"
        }
    },
    {
        "name":             "Pythran",
        "source_languages": "Python",
        "target_languages": "C++",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/serge-sans-paille/pythran"
        }
    },
    {
        "name":             "QuickJS",
        "source_languages": "JavaScript",
        "target_languages": "C",
        "notes":            "Compiles JavaScript (ES2020) to bytecode and embeds the bytecode in C.",
        "links": {
            "web":          "https://bellard.org/quickjs/"
        }
    },
    {
        "name":             "Ragel",
        "source_languages": "Ragel",
        "target_languages": "C | C++",
        "notes":            "Compiles executable finite state machines from regular languages.",
        "links": {
            "web":          "http://www.colm.net/open-source/ragel/"
        }
    },
    {
        "name":             "RPerl",
        "source_languages": "RPerl | Perl.",
        "target_languages": "C++",
        "notes":            "RPerl, a restricted subset of Perl. Unrelated to RPython.",
        "links": {
            "repo":         "https://github.com/wbraswell/rperl"
        }
    },
    {
        "name":             "RPython",
        "source_languages": "RPython | Python.",
        "target_languages": "C",
        "notes":            "RPython, a restricted subset of Python. Unrelated to RPerl.",
        "links": {
            "web":          "https://rpython.readthedocs.org/en/latest/"
        }
    },
    {
        "name":             "Sather",
        "source_languages": "Sather",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.gnu.org/software/sather/"
        }
    },
    {
        "name":             "Scheme-to-C",
        "source_languages": "Scheme",
        "target_languages": "C",
        "notes":            "Example nanopass compiler",
        "links": {
            "repo":         "https://github.com/akeep/scheme-to-c"
        }
    },
    {
        "name":             "Seed7",
        "source_languages": "Seed7",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://seed7.sourceforge.net/"
        }
    },
    {
        "name":             "Shedskin",
        "source_languages": "Python",
        "target_languages": "C++",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/shedskin/shedskin"
        }
    },
    {
        "name":             "SLua",
        "source_languages": "Lua",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/Neopallium/slua"
        }
    },
    {
        "name":             "SystemTap",
        "source_languages": "SystemTap",
        "target_languages": "C",
        "notes":            "SystemTap scripting language compiles kernel modules for monitoring Linux systems.",
        "links": {
            "web":          "http://sourceware.org/systemtap/"
        }
    },
    {
        "name":             "ThinScript",
        "source_languages": "ThinScript",
        "target_languages": "C | JavaScript | WebAssembly",
        "notes":            "A lower-level programming language inspired by TypeScript. ThinScript also compiles to JavaScript and WebAssembly.",
        "links": {
            "repo":         "https://github.com/evanw/thinscript"
        }
    },
    {
        "name":             "ts2c",
        "source_languages": "JavaScript | TypeScript",
        "target_languages": "C",
        "notes":            "Compiles a subset of JavaScript/TypeScript (ES3) to readable C89.",
        "links": {
            "repo":         "https://github.com/andrei-markeev/ts2c"
        }
    },
    {
        "name":             "TSP",
        "source_languages": "Tcl",
        "target_languages": "C",
        "notes":            "A typed subset of Tcl. An experimental JIT. Compiles procedures written in a statically typed subset of Tcl to C or Java to accelerate Tcl programs.",
        "links": {
            "repo":         "https://github.com/tpoindex/tsp"
        }
    },
    {
        "name":             "UbxBasic",
        "source_languages": "Basic",
        "target_languages": "C | C++",
        "notes":            "A fork of [BCX](http://bcx-basic.sourceforge.net/) that adds Linux support in addition to Windows. Uses Glib.",
        "links": {
            "web":          "https://sourceforge.net/projects/ubxbasic/"
        }
    },
    {
        "name":             "Ur/Web",
        "source_languages": "Ur/Web",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "http://www.impredicative.com/ur/"
        }
    },
    {
        "name":             "V",
        "source_languages": "V",
        "target_languages": "C",
        "notes":            "A no-GC systems language with modern features like sum types and immutability by default.",
        "links": {
            "repo":         "https://github.com/vlang/v"
        }
    },
    {
        "name":             "Vala",
        "source_languages": "Vala",
        "target_languages": "C",
        "notes":            "",
        "links": {
            "web":          "https://wiki.gnome.org/Projects/Vala"
        }
    },
    {
        "name":             "Vostok",
        "source_languages": "Oberon-07",
        "target_languages": "C | Java | JavaScript | Oberon",
        "notes":            "",
        "links": {
            "repo":         "https://github.com/Vostok-space/vostok"
        }
    },
    {
        "name":             "wasm2c",
        "source_languages": "WebAssembly",
        "target_languages": "C",
        "notes":            "Converts WASM files to C source and header.",
        "links": {
            "repo":         "https://github.com/WebAssembly/wabt/tree/master/wasm2c"
        }
    },
    {
        "name":             "wasmdec",
        "source_languages": "WebAssembly",
        "target_languages": "C",
        "notes":            "Converts WebAssembly binaries to C.",
        "links": {
            "repo":         "https://github.com/wwwg/wasmdec"
        }
    },
    {
        "name":             "wax",
        "source_languages": "wax",
        "target_languages": "C | C# | C++ | Java | Lua | Python | Swift | TypeScript | WebAssembly",
        "notes":            "A language design for transpiling.",
        "links": {
            "web":          "https://github.com/LingDong-/wax"
        }
    },
    {
        "name":             "Zephir",
        "source_languages": "Zephir",
        "target_languages": "C",
        "notes":            "A language for writing PHP extensions.",
        "links": {
            "web":          "http://zephir-lang.com/"
        }
    },
    {
        "name":             "ZZ",
        "source_languages": "ZZ (Drunk Octopus)",
        "target_languages": "C",
        "notes":            "A safe dialect of C for embedded systems inspired by Rust.",
        "links": {
            "repo":         "https://github.com/aep/zz"
        }
    }
]
