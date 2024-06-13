import java.util.*;

public class COLLECTION {
    public static void main(String[] args) {

        Set<Integer> mySet = new HashSet<>();
        mySet.add(2);
        mySet.add(3);
        mySet.add(4);
        mySet.add(5);

        System.out.println("Size of the set: " + mySet.size());

      
        if (mySet.contains(5)) {
            System.out.println("Element 5 present in the set");
        } else {
            System.out.println("Element 5 not present in the set");
        }

        mySet.remove(3);

       
        System.out.println("Elements of the set:");
        for (Integer element : mySet) {
            System.out.println(element);
        }

        Set<Integer> additionalSet = new HashSet<>();
        additionalSet.add(6);
        additionalSet.add(7);
        mySet.addAll(additionalSet);

       
        System.out.println("Updated elements of the set:");
        for (Integer element : mySet) {
            System.out.println(element);
        }

 
        mySet.clear();
        System.out.println(  mySet.size());
    }

}



       
       