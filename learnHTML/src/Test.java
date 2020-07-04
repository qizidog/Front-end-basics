public class Test {
    public static void main(String[] args) {
        System.out.println("once upon a time, there was a qizidog");
        String[] paths = System.getProperty("java.class.path").split(";");
        for (String path:paths) {
            System.out.println(path);
        }
    }
}
