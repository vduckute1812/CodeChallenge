#include <iostream>

typedef struct Data
{
    char name[100];
}Student;

void printData(int x[], int k, Student* students)
{
    for(int i = 1; i <= k; i++)
    {
        std::cout << students[x[i]-1].name << " ";
    }
    std::cout << std::endl;
}

void divideGroup(int key, int x[], int N, int k, Student* students)
{
    for(int i = x[key - 1] + 1; i < N - k + key; i++)   // key <= k
    {
        x[key] = i;
        if (key == k) {
            printData(x, k, students);
        }
        else
        {
            divideGroup(key + 1, x, N, k, students);
        }
    }    
}

int main()
{
    int x[100];

    int N, k;

    std::cout << "Nhap so sinh vien: ";
    std::cin >> N;

    Student* students = new Student[N];


    for(int i = 0; i < N; i++)
    {
        std::cin >> students[i].name;
    }

    std::cout << "So cap sinh vien: ";
    std::cin >> k;
    x[0] = 0;

    divideGroup(1, x, N, k, students);
    delete []students;
    return 0;
}