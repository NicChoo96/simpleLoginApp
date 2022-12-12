package com.company;

import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
        // Plain Text input to be encoded and decoded
//        String input = "HELLO WORLD";

        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your plain text: ");
        String input = sc.nextLine();
//        String offSetCharacter = "F";
        System.out.print("Enter your offset character: ");
        String offSetCharacter = sc.nextLine();

        if(offSetCharacter.length() != 1){
            System.out.println("Incorrect input");
            return;
        }

        System.out.println("Original Plain Text: " + input);
        System.out.println("Offset Character: " + offSetCharacter);

        Encoder encoder = new Encoder();

        String encodedString = encoder.encode(offSetCharacter + input);

        System.out.println("Encoded String: " + encodedString);

        String decodedString = encoder.decode(encodedString);

        System.out.println("Decoded String: " + decodedString);
    }
}
