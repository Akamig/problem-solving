#include <iostream>
using namespace std;
int main() {
    long long a = 4294967296;
    float b = 4294967296;
    long long c = 4294967297;
    if (a == b){
        cout << "test1ok" << '\n';
    }
    if (b == c){
        cout << "test2ok" << '\n';
    }
    if ( c != a ){
        cout << "test3ok" << '\n';
    }

    if (a == b && b == c && c != a) {
        cout << "true" << '\n';
    } else {
        cout << "false" << '\n';
    }
    return 0;
}