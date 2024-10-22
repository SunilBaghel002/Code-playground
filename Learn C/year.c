#include<stdio.h>

int main(){
    int year;
    printf("Enter year you would to check whether is it leap or not: ");
    scanf("%d", &year);
    if (year%4==0)
    {
        printf("%d is a leap year", year);
    }
    else
    {
        printf("%d is not a leap year", year);
        printf("\nTry again");
    }
    return 0;
    
}