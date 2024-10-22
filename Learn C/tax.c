#include <stdio.h>

int main()
{
    int a;
    float rate;
    float tax;
    printf("Enter your Income per year: ");
    scanf("%d", &a);
    if (a < 250000)
    {
        printf("You don't need to pay tax");
    }
    else if (a >= 250000 && a < 400000)
    {
        rate = 0.025;
        tax = rate * a;
        printf("You have to paid %f this year", tax);
    }
    else if (a >= 400000 && a < 800000)
    {
        rate = 0.1;
        tax = rate * a;
        printf("You have to paid %f this year", tax);
    }
    else if (a >= 800000 && a < 2500000)
    {
        rate = 0.3;
        tax = rate * a;
        printf("You have to paid %f this year", tax);
    }
    else
    {
        rate = 0.5;
        tax = rate * a;
        printf("You have to paid %f this year", tax);
    }
    printf("\nThanks for your time. kindly pay your tax");
    return 0;
}