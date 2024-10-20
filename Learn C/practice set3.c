#include<stdio.h>

int main(){
    // int marks;
    // printf("Enter your Marks: ");
    // scanf("%d", &marks);
    // if (marks>90 && marks<=100){
    //     printf("Your grade is A\n");
    // }
    // else if (marks>80 && marks<=90){
    //     printf("Your grade is B\n");
    // }
    // else if (marks>70 && marks<=80){
    //     printf("Your grade is C\n");
    // }
    // else if (marks>60 && marks<=70){
    //     printf("Your grade is D\n");
    // }
    // else if (marks>50 && marks<=60){
    //     printf("Your grade is E\n");
    // }
    // else if (marks>0 && marks<=50){
    //     printf("Your grade is F\n");
    // }
    // else{
    //     printf("Enter valid marks\n");
    // }

    // int a=10;
    // if (a=11)
    // {
    //     printf("I am 11");
    // }
    // else
    // {
    //     printf("I am not 11");
    // }

    int marks1, marks2, marks3;
    float result;
    printf("Enter marks of First subject: ");
    scanf("%d", &marks1);

    printf("Enter marks of Second subject: ");
    scanf("%d", &marks2);

    printf("Enter marks of Third subject: ");
    scanf("%d", &marks3);

    result= (marks1+marks2+marks3)*100/3;
    printf("Your result is %f", &result);
       
}