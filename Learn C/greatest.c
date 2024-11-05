#include<stdio.h>

int main()
{
    int a,b,c,d;
    printf("enter the number: ");
    scanf("%d\n", &a);
    printf("enter the number: ");
    scanf("%d\n", &b);
    printf("enter the number: ");
    scanf("%d\n", &c);
    printf("enter the number: ");
    scanf("%d\n", &d);
    if (a>b && a>c && a>d)
    {
        printf("largest is %d", a);
    }
    else if (a<b && b>c && b>d)
    {
        printf("largest is %d", b);
    }
    else if (c>b && a<c && c>d)
    {
        printf("largest is %d", c);
    }
    else if (d>b && d>c && a<d)
    {
        printf("largest is %d", d);
    }
    return 0;
}