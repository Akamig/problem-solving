#include <bits/stdc++.h> 
using namespace std;

int main(void) {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  short n, x1, y1, r1, x2, y2, r2;
  short s, m;
  float d;
  cin >> n;
  for (int i = 0; i < n; i++){
    cin >> x1 >> y1 >> r1 >> x2 >> y2 >> r2;
    d = sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    if (r1 > r2)
      swap(r1, r2);
    s = r1 + r2;
    m = r2 - r1;
    if (x1 == x2 && y1 == y2)
      if (r1 == r2)
      cout << -1 << '\n';
      else
      cout << 0 << '\n';
    else if(d<m || d>s)
      cout << 0 << '\n';
    else if (d == m || d == s)
      cout << 1 << '\n';
    else if(d>m && d<s)
      cout << 2 << '\n';
    };
    return 0;
}