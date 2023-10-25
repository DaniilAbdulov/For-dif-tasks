public class Kata {
    public static void main(String[] args) {
        String result = Kata.getMiddle("test");
        System.out.println(result);
    }

    public static String getMiddle(String word) {
        int length = word.length();
        int middleIndex = length / 2;
        if (length % 2 == 0) {
            return word.substring(middleIndex - 1, middleIndex + 1);
        } else {
            return word.substring(middleIndex, middleIndex + 1);
        }
    }
}