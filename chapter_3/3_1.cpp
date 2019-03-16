#include <iostream>

typedef struct Data
{
    int score;
    char name[100];
} Student;

char getFirst(char* name)
{
    char* tmp = name;

    char firstName = *tmp;

    bool block = true;

    while(*tmp != '\0')
    {
        if (block == false) {
            firstName = *tmp;
            block = true;
        }
        
        if (*tmp == ' ') 
        {
            block = false;
        }
        
        tmp++;
    }

    return firstName;
}

bool needSort(char* str1, char* str2)
{
    char s1 = getFirst(str1);
    char s2 = getFirst(str2);

    return s1 > s2;
}

void printStudent(Student* students, int N)
{

    std::cout << std::endl << "BANG DIEM SINH VIEN" << std::endl;
    for(int i = 0; i < N; i++)
    {
        std::cout << "* Name: " << students[i].name << std::endl;
        std::cout << "* Score: " << students[i].score << std::endl;
    }
}

void swap(Student* s1, Student* s2)
{
    Student* tmp = s1;
    s1 = s2;
    s2 = tmp;
}

int main()
{       int N;
    std::cout << "Nhap so luong sinh vien: ";
    std::cin >> N;
    Student* students = new Student[N];

    for(int i = 0; i < N; i++)
    {
        std::cout << "Nhap ten: ";
        std::cin >> students[i].name;

        std::cout << "Nhap diem: ";
        std::cin >> students[i].score;
    }
    
    printStudent(students, N);

    for(int i = 0; i < N - 1; i++)
    {
        for(int j = i + 1; j < N; j++)
        {
            if (needSort(students[i].name, students[j].name)) {
                swap(&students[i], &students[j]);
            }            
        }                
    }
    
    printStudent(students, N);

    delete []students;
    return 0;
}