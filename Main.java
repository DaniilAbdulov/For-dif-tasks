import java.util.Arrays;

public class Main{
    
    public static int[] compoundArray(int[] a, int[] b){

        int[] newArr = new int[a.length + b.length];
        int[] bigArr = a.length > b.length ? a : b;
        int[] smallArr = bigArr == a ? b : a;
        int[] otherValues = Arrays.copyOfRange(bigArr, smallArr.length, bigArr.length);
        int index = 0;

        for (int i = 0; i < smallArr.length; i++) {
            int first = a[i];
            int second = b[i];
            newArr[index++] = first;
            newArr[index++] = second;
        }

        for (int value : otherValues) {
            newArr[index++] = value;
        }

        return newArr;
    }
}