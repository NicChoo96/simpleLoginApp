package com.company;

import java.util.Hashtable;
import java.util.Map;

public class Encoder {


    private Map<Character, Integer> referencedIndexed = new Hashtable<Character, Integer>();

    // Referenced Table List
    private char[] characterList = {'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R','S','T','U','V','W','X','Y','Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '(', ')', '*', '+', ',' ,'-', '.', '/'};

    public Encoder(){
        // Create hashtable to store key character to its index as value
        for(int i = 0; i < characterList.length; i++){
            referencedIndexed.put(characterList[i], i);
        }
    }

    public String encode(String plainText){
        // If plaintext only contains the encode symbol, return back plaintext
        if(plainText.length() <= 1) return plainText;

        char firstCharacter = plainText.charAt(0);

        // Return plaintext if encoded symbol does not exist in the reference table
        if(!referencedIndexed.containsKey(firstCharacter)) return plainText;

        int offSetCharacterCount = referencedIndexed.get(firstCharacter);

        String encodedString = "";

        for(int i = 1; i < plainText.length(); i++){
            // If plainText contain character not from list, skip it
            if(!referencedIndexed.containsKey(plainText.charAt(i))){
                encodedString += plainText.charAt(i);
                continue;
            }

            // Retrieve plaintext character index from referenced table
            int currentCharacterIndex = referencedIndexed.get(plainText.charAt(i));

            // Offset encoding backward
            int encodedOffset = currentCharacterIndex - offSetCharacterCount;

            // Rotate back to top when offset goes below 0
            if(encodedOffset < 0) encodedOffset = characterList.length + encodedOffset;

            // Add to encoded string
            encodedString += characterList[encodedOffset];
        }

        // Return encoded string with encoding character
        return firstCharacter + encodedString;
    }

    public String decode(String encodedText){
        // If encodedText only contains the encode symbol, return back empty string
        if(encodedText.length() <= 1) return "";

        char firstCharacter = encodedText.charAt(0);

        // Return plaintext if encoded character does not exist in the reference table excluding the encoding character
        if(!referencedIndexed.containsKey(firstCharacter)) return encodedText.substring(1);

        int offSetCharacterCount = referencedIndexed.get(firstCharacter);

        String decodedString = "";

        for(int i = 1; i < encodedText.length(); i++){
            // If plainText contain character not from list, skip it
            if(!referencedIndexed.containsKey(encodedText.charAt(i))){
                decodedString += encodedText.charAt(i);
                continue;
            }

            // Retrieve plaintext character index from referenced table
            int currentCharacterIndex = referencedIndexed.get(encodedText.charAt(i));

            // Retrieve encoded offset forward, when it exceed the list, mod the value based on the character list length
            int encodedOffset = (currentCharacterIndex + offSetCharacterCount) % characterList.length;

            // Append referenced table index to decode string
            decodedString += characterList[encodedOffset];
        }

        // Return Decoded String with no encoding character
        return decodedString;
    }
}
