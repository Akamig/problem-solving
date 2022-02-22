#include <iostream>
#include <stdint.h>
using namespace std;
int main(int argc, char const *argv[]) {
  cin.tie(NULL);
  ios::sync_with_stdio(false);
  uint16_t N, L, D, C, i = 0, delay = 5;
  int Test = 3;
  cout << sizeof(N) << '\n' <<
  cin >> N >> L >> D;
  while (++i) {
    C = D * i;
    if (((C) % (L + delay)) >= L) {
      break;
    } else if ((C) > ((L + delay) * N) - delay) {
      break;
      return 0;
    }
  }
  cout << D * i << '\n';
  return 0;
}