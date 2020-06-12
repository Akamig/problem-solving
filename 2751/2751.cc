#include <iostream>
using namespace std;

void heapify(int_fast32_t array[], int index, int n) {
  int l;
  if ((l = 2 * index + 1) >= n){
    return;
  }
  int r = l+1;
  
  int largest = index;
  if (array[l] > array[largest]){
    largest = l;
  }
  if (r < n && array[r] > array[largest]) {
    largest = r;
  }
  if(largest != index){
    swap(array[index], array[largest]);
    heapify(array, largest, n);
  }
}

void heapsort(int_fast32_t array[], int n) {
  for (int i = n / 2 - 1; i >= 0; i--)
    heapify(array, i, n);

  for (int i = n - 1; i >= 1; i--)
  {
    swap(array[0], array[i]);
    heapify(array, 0, i);
  }
}

int main(void) {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  
  int n;
  cin >> n;
  int_fast32_t arr[n];
  for (int i = 0; i < n; i++) {
    cin >> arr[i];
  };
  heapsort(arr, n);
  for (int i = 0; i < n; i++) {
    cout << arr[i] << '\n';
  };
  return 0;
}