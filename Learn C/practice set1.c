#include<stdio.h>

int main(){
    int a=3;
    int b=4;
    printf("area of rectangle1 is %d\n", a*b);

    int l;
    int br;
    printf("enter the length of rectangle: ");
    scanf("%d",&l);
    printf("enter the breadth of rectangle: ");
    scanf("%d",&br);
    printf("Area of rectangle is %d\n",l*br);


    int r;
    float area;
    printf("Enter the value of Radius : ");
    scanf("%d", &r);
    area= 22*r*r/7;
    printf("Area of circle is %f\n", area);

    float volume;
    float h;
    printf("Enter the height of cylinder: ");
    scanf("%f", &h);
    volume= 22*r*r*h/7;
    printf("Volume of cylinder is %f\n", volume);

    float c;
    float f;
    printf("Enter the value of °F(Farenheit): ");
    scanf("%f", &f);
    c= (f-32) *5/9;
    printf("Then, value of °C(Celcius) is %f\n", c);

    int principle, years;
    float rateOfInterest, simpleInterest;

    printf("Principle= ");
    scanf("%d", &principle);
    printf("No. of years= ");
    scanf("%d", &years);
    printf("Rate of Interest= ");
    scanf("%f", &rateOfInterest);
    simpleInterest= principle*years*rateOfInterest/100;
    printf("Simple Interest= %f", simpleInterest);
    return 0;     
}