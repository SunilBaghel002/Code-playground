#include<stdio.h>

int main()
{
    int n=8;
    for (int i = 1; i <=10; i++)
    {
        printf("%d * %d = %d\n", n, i, n*i);
    }
    int m;
    int prod=1;
    printf("Enter a number: ");
    scanf("%d", &m);
    for (int i = 1; i <=m; i++)
    {
        prod=prod*i;
        // printf("%d\n", prod);
    }
    printf("Factorial of %d is %d\n", m, prod);
    int p;
    printf("Enter another number: ");
    scanf("%d", &p);
    prod=1;
    int j=1;
    while (j<=p)
    {
        prod=prod*j;
        // printf("%d\n", prod);
        j++;
    }
    printf("Factorial of %d is %d", p, prod);
    return 0;
}