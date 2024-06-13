
import java.util.*;

public class MAP {
    public static void main(String[] args) {

        
        Map<Integer, String> studentMap = new HashMap<>();
        
     
        studentMap.put(101, "Senthil");
        studentMap.put(102, "Kumar");
        studentMap.put(103, "Cheran");
        studentMap.put(104, "Manoj");

        System.out.println("Size"+studentMap.size());

        
        if (studentMap.containsKey(102)) {
            System.out.println(" present in the map");
        } else {
            System.out.println("Not present in the map");
        }

        String studentName = studentMap.get(103);
        System.out.println( studentName);

        studentMap.remove(101);

        
        System.out.println("Elements of the map:");
        for (Map.Entry<Integer, String> entry : studentMap.entrySet()) {
            System.out.println("Student ID: " + entry.getKey() + ", Student Name: " + entry.getValue());
        }

       
       
        Map<Integer, String> additionalStudentMap = new HashMap<>();
        additionalStudentMap.put(105, "Ravi");
        additionalStudentMap.put(106, "Suresh");
        studentMap.putAll(additionalStudentMap);

        
        System.out.println("Updated elements of the map:");
        for (Map.Entry<Integer, String> entry : studentMap.entrySet()) {
            System.out.println("Student ID: " + entry.getKey() + ", Student Name: " + entry.getValue());
        }

       
        studentMap.clear();
        System.out.println("Size of the map after clearing: " + studentMap.size());
    }
}


