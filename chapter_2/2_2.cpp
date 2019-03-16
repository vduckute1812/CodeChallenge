#include <iostream>
#include <math.h>

bool isPrime(unsigned int value)
{
    int range = sqrt(value);
    bool check = true;

    if(value == 2)
        return true;

    for(int i = 2; i <= range + 1; ++i)
    {
        if(value % i == 0)
        {
            check = false;
            break;
        }        
    }

    return check;
}

int main()
{
    int N;
    std::cout << "Nhap N = ";
    std::cin >> N;

    int count = 0;
    int sum = 0;

    while( N != 0 )
    {
        int range = sqrt(N);
        if (isPrime(N)) {
            std::cout << N << " ";
            sum += N;
            count++;
            break;
        }
        
        for(int i = 2; i <= range; ++i)
        {
            if( N % i == 0 )
            {
                std::cout << i << " ";
                N/=i;
                sum += i;
                count++;
                break;
            }
        }
    }    

    std::cout << std::endl;
    std::cout << "So uoc: " << count << std::endl;
    std::cout << "Tong so uoc: " << sum <<std::endl;

    return 0;
}