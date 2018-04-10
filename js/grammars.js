/**
 * @author avallejo
 */

var grammars = {
	
	
	
	haikus : {
        quien1 : ["Cifuentes", "Cristina","Botella","Carmena","La reina","Rivera"],
		que1 : ["sabe", "dice",  "tiene", "pone","cuelga","muestra","lleva", "manda"],
		
		abre1 : ["#quien1# #que1#."],
		
		quien2 : ["Casado"],
		que2 : [ "tambien", "tiene","calla"],
		
		abre2 : ["#quien2# #que2#."],
		
		quien3 : ["Bárcenas"],
		que3 : [ "calla","fijo","todo","guarda","tiene","lleva","suizo"],
		
		
		abre3 : ["#quien3# #que3#."],
		
		
		quien4 : ["Es un"],
		que4 : [ "imperio", "infierno","colibrí","misterio","enchufe","bochorno","desastre","alcalde","pirata","convicto","gallego","verano","amigo"],
		
		abre4 : ["#quien4# #que4#."],
		
		
		quien5 : ["Mariano","Puigdemont","Rivera","Errejón","Montero","Iglesias"],
		que5 : [ "duda", "sigue","sabe","llama","deja","lleva"],
		
		abre5 : ["#quien5# #que5#."],
		
		quienN : ["Carrero"], /*censurado*/
		queN : [ "sube"],
		
		personas2 : ["Putin", "Donald","Aznar","Rato","Rufián","Sánchez"],
		adjetivo3 : ["malandrín","bellaco","fanfarrón","bravonel","bravucón","blanducho","feúcho","hortera","listillo","pobretón","y Merkel"],
		
		abre6 : ["#personas2# #adjetivo3#"],
		
		
		quien7 : ["Trump" ],
		que7: ["bombardea","se atreve"],
		abre7 : ["#quien7# #que7#"],
		
        mquien1 : ["La gente", "El pueblo","El diario","La Uni"],
		mque1 : ["se sorprende", "con informes","con noticias"],
		medio1 : ["#mquien1# #mque1#"],
		
		mquien2 : ["Apoyo","Palabras","Respaldo" ],
		mque2 : ["de Mariano"],
		
		mquien2b : ["Esperanza" ],
		mque2b : ["Vendetta","Venganza","llorona","tontucia"],
		
		
		medio2 : ["#mquien2# #mque2#", "#mquien2b# #mque2b#", "el mercado amigo", "Y Aguirre aparca" ],
		
		 mquien3 : ["Sospechan" ],
		mque3 : ["una traición","de venganza","que hay muchos","de intrigas"],
		medio3 : ["#mquien3# #mque3#"],
		
		
		 mquien4 : ["Sospechan" ],
		mque4 : ["una traición","de venganza","que hay muchos","de intrigas"],
		medio4 : ["#mquien4# #mque4#"],
		
		medio5 : ["Pide independencia","Cerámicas hay muchas","Estamos trabajando","Sin Alemania"],
		
	
		
		
		conclusion1 : "el tiempo dirá",
		conclusion2 : "mentiras nunca",
		conclusion3 : "te pillan fijo",
		conclusion4 : "dimisión clara",
		conclusion5 : "por la ventana", 
		conclusion6 : "en los almendros",
		conclusion7 : "no sabe nadie",
		conclusion8 : "¡qué desconcierto!",
		conclusion9 : "¿todos contentos?",
		conclusion10 : "todo estalla",
		conclusion10 : "sin la sociedad",
		conclusion11 : "y tu tranquilo",
		conclusion12 : "nadie dimite",
		conclusion13 : "loco del puente",
		
		conclusion14 : "sin Urdangarín",
		conclusion15 : "dinero tuyo",
		conclusion16 : "lo pensaremos",
		conclusion17 : "es democracia",
		conclusion18 : "es cosa mayor",
		conclusion19 : "todos iguales",
		conclusion20 : "que injusticia",
		conclusion21 : "quedaron libres",
		conclusion22 : "en cataluña",

		
        p1 :[ "#abre1#","#abre2#","#abre3#","#abre4#","#abre5#","#abre6#","#abre7#"],
        p2 : ["#medio1#","#medio2#","#medio3#","#medio4#","#medio5#"],
        p3 : ["#conclusion1#","#conclusion2#","#conclusion3#"
		,"#conclusion4#","#conclusion5#","#conclusion6#"
		,"#conclusion7#","#conclusion8#","#conclusion9#"
		,"#conclusion10#","#conclusion11#","#conclusion12#"  
		,"#conclusion13#","#conclusion14#","#conclusion15#"
		,"#conclusion16#","#conclusion17#","#conclusion18#"		
		,"#conclusion19#", "#conclusion20#",  "#conclusion21#"
		,"#conclusion22#", 
		"por el camino",
		"en la mañana",
		"es el verano",
		"de tus impuestos",
		"Madrid al cielo",
		"Pan y circo es",
		"Y somos sentimientos",
		"Todos sabemos"
		
		
		
		],
		
		haiku1 :"#p1#<br/>#p2#,<br/>#p3#.",
		
        origin : ["#haiku1#"],

    },
	
    

}
