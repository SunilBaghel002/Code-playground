#include<stdio.h>

int main(){
    float a;
    a=3.0/8 -2;
    printf("value of a: %f\n", a);

    int number;
    printf("Enter a Number: ");
    scanf("%d", &number);
    if (number%97==0){
        printf("Number is divisible by 97\n");
    }
    else{
        printf("Number is not divisible by 97\n");
    }

    int x=2,y=3,z=3,k=1;
    float result;
    result=3*x/y-z+k;
    printf("Result is %d", result);
}