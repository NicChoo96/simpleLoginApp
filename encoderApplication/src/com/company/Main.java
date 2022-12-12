package com.company;

public class Main {

    public static void main(String[] args) {
        // Plain Text input to be encoded and decoded
        String input = "HELLO WORLD";

        System.out.println("Original Plain Text: " + input);

        String offSetCharacter = "F";

        Encoder encoder = new Encoder();

        String encodedString = encoder.encode(offSetCharacter + input);

        System.out.println("Encoded String: " + encodedString);

        String decodedString = encoder.decode(encodedString);

        System.out.println("Decoded String: " + decodedString);
    }
}
