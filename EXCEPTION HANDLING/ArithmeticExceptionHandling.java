import java.util.*;

public class ArithmeticExceptionHandling {
        public static void main(String[] args) {
            try {
                int result = divide(10, 0);  
                System.out.println( result);  
            } catch (ArithmeticException e) {
                System.out.println("Division by zero is not allowed.");
            }
        }
        
        public static int divide(int a, int b) {
            return a / b;
        }
    }
    

