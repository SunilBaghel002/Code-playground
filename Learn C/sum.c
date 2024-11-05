#include<stdio.h>

int main(){
    int i=1;
    int n;
    int sum=0;
    while (i<=10)
    {
        sum=sum+i;
        i++;
        // printf("%d\n", sum);
    }
    printf("Sum of first 10 natural number is %d\n", sum);
    printf("Enter a natural number: ");
    scanf("%d", &n);
    sum=0;
    for (int i = 1; i <=n; i++)
    {
        sum=sum+i;
    }
    printf("Sum of first %d natural numbers is %d\n", n ,sum);
    int m;
    printf("Enter another natural number: ");
    scanf("%d", &m);
    sum=0;
    do
    {
        sum=sum+i;
        printf("%d\n", sum);
        i++;
    } while (i<=m);
    printf("Sum of first %d natural numbers is %d", m ,sum);
    return 0;
}