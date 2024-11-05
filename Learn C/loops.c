#include<stdio.h>

int main(){
    int i=1;
    int n;
    printf("Enter a natural number: ");
    scanf("%d", &n);
    do
    {
        printf("%d\n", i);
        i++;
    } while (i<=n);
    printf("Hence, there are natural number from 1 to %d\n", n);

    int j;
    int m=1;
    printf("Enter a number: ");
    scanf("%d", &j);
    for(j;j>=m;j--){
        printf("%d\n", j);
    }
    return 0;
}