#include <stdio.h>

int main()
{
    int a,b;
    double c;

    scanf("%d %d", &a,&b);
    c = (double)a / (double)b;
    printf("%.*f", 16, c);
}
