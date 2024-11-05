#include<stdio.h>

int main(){
    int n;
    printf("Enter a number: ");
    scanf("%d", &n);
    for (int i = 0; i <= 10; i++)
    {
        printf("%d\n",n*i);
    }
    
    int m=10;
    for (int j = 10; j >= 1; j--)
    {
        printf("%d\n", j*m);
    }
    
}