#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int dcompare(const void *i, const void *z);
int acompare(const void *i, const void *z);

int main() {
    int i,q,s=0;
        scanf("%d", &q);
    int a[q];
    int b[q];
        memset(a, 0, sizeof(a));
        memset(b, 0, sizeof(b));

    for(int i=0; i<q; i++){
        scanf("%d", &a[i]);}
    for(int i=0; i<q; i++){
        scanf("%d", &b[i]);}
    qsort(a, q, sizeof(int), acompare);
    qsort(b, q, sizeof(int), dcompare);
    for(i=0;i<=q-1;i++){
        a[i]*=b[i];
        s+=a[i];
    }
    printf("%d", s);
    return 0;
}


int acompare(const void *i, const void *z){
    return *(int *)i - *(int *)z;
}

int dcompare(const void *i, const void *z){
    return *(int *)z - *(int *)i;
}
