#include <cstdio>
#include <bits/stdc++.h>
short a[10001];
int main(void)
{
  std::ios_base::sync_with_stdio(false);
  int n;
  short b;
  scanf("%d", &n);
  for (int i = 0; i < n; i++)
  {
    scanf("%hu", &b);
    a[b]++;
  };

  for (int i = 0; i < 10001; i++) {
    for (int j = 0; j < a[i]; j++){printf("%d\n", i);}};
  return 0;
}