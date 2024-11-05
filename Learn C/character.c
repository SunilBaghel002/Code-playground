#include<stdio.h>
#include<ctype.h>

int main(){
    char ch;
    printf("Enter a character: ");
    scanf("%s", &ch);
    if (ch>='A' && ch<='Z')
    {
        printf("Your input character is uppercase");
    }
    else if (ch>='a' && ch<='z')
    {
        printf("Your input character is lowercase");
    }
    else{
        printf("Please try again! Input a character not everything");
    }
}