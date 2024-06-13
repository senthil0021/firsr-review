
 import java.util.LinkedList;
 import java.util.Queue;
 import java.util.Stack;
 import java.util.Vector;

 public class STACK{
 
 public static void main(String args[]){
 
 Stack<String> employeeName=new Stack<String>();
 
 employeeName.push("Abel");
 employeeName.push("Bob");
 employeeName.push("Charlie");
 
 employeeName.pop();
 
 System.out.println(employeeName);
 //Queue
 Queue<Integer> number = new LinkedList();
        number.offer(1);
        number.offer(2);
        number.offer(3);
        System.out.println(number);

        int removeNumber = number.poll();
        System.out.println(removeNumber);
    //vector
    Vector<String> employee = new Vector<String>();
employee.add("manoj");
employee.add("senthil");
employee.add("kumar");

employee.add(1,"sujith"); // adding values to specific index is possible
employee.remove("manoj"); //to remove values
System.out.println(employee);
}
}
 
 