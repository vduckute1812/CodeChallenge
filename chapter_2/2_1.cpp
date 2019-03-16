#include <iostream>

int BinaryToDec(int binary)
{
    int sum = 0;
    int idx = 0;
    int tmp = binary;
    int remain;

    while(tmp)
    {
        remain = tmp % 10;
        sum += remain << idx;
        tmp /= 10;
        idx++;
    }

    return sum;
}

char* BinaryToHexa(int binary)
{
    int numCount = 0;
    int tmp = binary;
    char* values;

    while(tmp)
    {
        tmp/=10000;
        numCount++;
    }

    values = new char[numCount];

    tmp = binary;
    int remain;
    int dec;

    for(int i = numCount - 1; i >=0; i--)
    {
        remain = tmp%10000;        
        tmp /= 10000;
        dec = BinaryToDec(remain);
        if(dec < 10)
        {
            values[i] = dec + '0';
        }
        else
        {
            values[i] = dec - 10 + 'A';
        }
    }
    
    return values;
}

int main()
{
    int binaryValue;
    std::cout << "Moi nhap so nhi phan: ";

    bool checkBinary = false;
    int tmp = 0;
    int remain;

    while(!checkBinary)
    {
        std::cin >> binaryValue;

    /////////// Check validate //////////////////////
        tmp = binaryValue;
        
        do
        {
            remain = tmp % 10;
            if(remain != 0 && remain != 1)
            {
                checkBinary = false;
                std::cout << "Moi ban nhap lai gia tri khac: " << std::endl;
                break;
            }
            tmp /= 10;
        } 
        while (tmp != 0);
        
        if(!tmp)
        {
            checkBinary = true;
        }
    }
    ///////////////////////////////////////////////

    char* values =  BinaryToHexa(binaryValue) ;
    
    std::cout << "Result :" << values << std::endl;
    delete values;

    return 0;
}