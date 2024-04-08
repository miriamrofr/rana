public class RomanConverterAlgorithm {
	
	private final static String[] UNIDADES = {"","I","II","III","IV","V","VI","VII","VIII","IX"};
	private final static String[] DECENAS = {"","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"};
	private final static String[] CENTENAS = {"","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"};
	private final static String[] MILLARES = {"","M","MM","MMM"};
	
	/**
	 * Método encargado de la conversión del número de tipo Integer a su número romano, compruba previamente el
	 * rango del parámetro
	 * @param number es el número que deseas aplicar la conversión
	 * @return devuelve la conversión del número romano en formato String
	 */
	public static String convertToRoman(int number) {
		
		String res= "";

		String numberS = Integer.toString(number);	
		
		if(number < 1 || number >3999)
			return "Error, numero fuera de rango";
		
		
		if(numberS.length()==1)
			res = getUnidades(number);
		else if(numberS.length()==2)
			res = getDecenas(number);
		else if(numberS.length()==3)
			res = getCentenas(number);
		else
			res =getMillares(number);
		
		return res;
	}
	/**
	 * Devuelve el número romano del parámetro pasado
	 * @param number es el número en unidades
	 * @return devuelve la conversión del número romano en formato String
	 */
	public static String getUnidades(int number) {
		
		return UNIDADES[number];
	}

	/**
	 * Devuelve el número romano del parámetro pasado
	 * @param number es el número en decenas
	 * @return devuelve la conversión del número romano en formato String
	 */
	public static String getDecenas(int number) {
		
		int decenas = number/10;
		int unidades = number%10;
		return DECENAS[decenas]+""+UNIDADES[unidades];
	}
	
	/**
	 * Devuelve el número romano del parámetro pasado
	 * @param number es el número en centenas
	 * @return devuelve la conversión del número romano en formato String
	 */
	public static String getCentenas(int number) {
		
		int centenas = number /100;
		int decenas = (number%100)/10;
		int unidades = number%10;
		return CENTENAS[centenas]+""+DECENAS[decenas]+""+UNIDADES[unidades];
	}
	
	/**
	 * Devuelve el número romano del parámetro pasado
	 * @param number es el número en millares
	 * @return devuelve la conversión del número romano en formato String
	 */
	public static String getMillares(int number) {
		int millares = number / 1000;
		int centenas = (number % 1000)/100;
		int decenas = (number%100)/10;
		int unidades = number%10;		
		return MILLARES[millares]+""+CENTENAS[centenas]+""+DECENAS[decenas]+""+UNIDADES[unidades];
	}
	

}
