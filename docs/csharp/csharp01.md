## 基础语法
### 一段C#程序
一个C#程序主要包括：

- 命名空间 namespace
- 类关键字 class 
- 方法
- 属性
- main方法
```csharp
using System;
namespace Test
{
    class Demo1
    {
        static void main(String[] args)
        {
            Console.WriteLine("111");
            
        }
    }
}
```
### 数据类型
C#中变量的数据类型分为三种：

- 值类型：bool,byte,char,decimal,double,float,int,long,sbyte,short,uint,ulong,ushort
   - 通过 `sizeof(xxx)`获取数据类型的存储空间
- 引用类型：object,dynamic（动态类型）,string,
   - 装箱操作：值类型 → 对象类型
   - 拆箱操作：对象类型→ 值类型
- 指针类型 ：type* 指针名


### 类型转换
类型转换：

- 隐式类型转换：小范围数据类型→大范围数据类型
- 显示类型转换：大范围数据类型→小范围数据类型。`int i = 10;byte b =(byte)i;`

类型转换方法：

- C# 提供了一些内置的类型转换（使用`System.Convert`类中的函数完成）。
- 使用 `Parse`方法将字符串转换为对应的数值类型，失败则抛出异常`string str = "111.22"; double d = double.Parse(str);`
- 使用`TryParse`方法，失败不会抛出异常，但是会返回一个布尔值，表示当前是否转换成功。
- 自定义类型转换：待补充

### 变量和常量
变量的定义：`数据类型 变量名;`<br />常量的定义：`const 数据类型 常量名 = 常量值;`

### 运算符

- 算术运算符 ...
- 关系运算符 ...
- 逻辑运算符 ...
- 位运算符 ...
- 赋值运算符 ...
- 其他运算符：
   - `sizeof()`返回数据类型的大小
   - `typeof()`返回class的类型
   - `&`返回变量的地址
   - `*`变量的指针
   - `?:`三元表达式
   - `is`判断对象是否为某一类型
   - `as`强制转换，即使转换失败也不会抛出异常、

### 判断

- if
- if...else
- if 嵌套
- switch 
- switch 嵌套
- ?: 三元表达式

### 循环

- while
- for ：`for(; ;){xxxxx}` 无限循环。
- for each
- do...while
- 嵌套循环
- 循环控制语句：
   - break
   - continue

### 访问控制权限

- public：任何公有成员可以被外部的类访问。
- private ：只有同一个类中的函数可以访问它的私有成员。
- portected ：该类内部和继承类中可以访问。
- internal: 同一个程序集的对象可以访问。
- portected internal：portected  和 internal 的并集，符合任意一条都可以访问。

### 方法
方法的定义格式：
```csharp
访问控制修饰符 	返回值类型 	方法名称(参数列表)
{
    方法体
}

public string GetStr(string a,string b)
{
    return a+b;
}
```

参数传递分为三种情况：

- 值传递：上面的例子就是值传递，在此种情况下，每次调用该方法是，会为每个值参数创建一个新的存储位置。
- 引用传递：通过`ref`关键字，声明引用参数
- 返回值传递（类似SQL触发器,可以将方法返回值通过参数输出）：使用`out`关键字

### 可空类型 Nullable
单问号`?` ，对`int,double,bool`等无法直接赋值为null的数据类型进行null的赋值。
```csharp
int i1; // 默认值0
int? i2; // 默认值为null
```

双问号`??`用于判断一个变量在为null的时候返回一个指定的值。
> 可以理解为三元表达式的简化形式， `??` 左值不为空，那么返回左值，左值为空返回右值

```csharp
double? num1 = null;
double num2 = num1 ?? 5.34; // 当num1为空值null时则返回5.34,不为空时返回num1的值
```

### 数组 Array
> _数组是一个存储相同类型元素的固定大小的顺序集合。数组是用来存储数据的集合，通常认为数组是一个同一类型变量的集合。_



声明数组：`数据类型[] 数组名;`<br />初始化数组：`数据类型[] 数组名 = new 数据类型[数组长度];`<br />初始化并赋值数组：`数据类型[] 数组名 = new 数据类型[数组长度]{数组元素集合...};`<br />访问数组元素：通过索引下标进行访问，如`int a = arr1[0];// 方位arr1数组中的第一个元素`<br />循环遍历数组：
```csharp

int[] arr1 = new arr1[10]{1,2,3,4,5,6,7};

// 普通for
for(int i = 0;i<arr1.length;i++)
{
    Console.WriteLine("当前元素的索引:"+i+"值:"+arr1[i]);
}

// foreach
foreach (int item in arr1)
{
   Console.WriteLine("当前元素的索引:"+i+"值:"+arr1[i]); 
}
```

### 字符串
使用`string`关键字来声明一个字符串变量。
> 基本和其他高级语言一致....



### 结构体
结构体，没错！就是`c语言`中的结构体😂

结构体定义格式，使用`Struct`关键字来定义，如下：
```csharp
struct Books
{
    public string title;
    public string author;
    public string subject;
    public int book_id;
}
```
> Tips：结构体中声明的字段无法赋初值

使用方式和类使用对象差不多：
```csharp
public static void Main(string[] args)
{
    // 声明一个结构体
    Books book1;
    // 为其中的属性进行赋值
    book1.title = "平凡的世界";
    book1.author = "路遥";
    book1.subject = "文学";
    book1.book_id = 111;
    /* 打印 Book1 信息 */
    Console.WriteLine( "book1 1 title : {0}", book1.title);
    Console.WriteLine("book 1 author : {0}", book1.author);
    Console.WriteLine("book 1 subject : {0}", book1.subject);
    Console.WriteLine("book 1 book_id :{0}", book1.book_id);
}
```

#### 类和结构体对比
> 待补充....


### 枚举
枚举定义（默认情况下，第一个枚举值为0，然后依次递增..当然自己也可以定义默认值）
```csharp
enum 枚举名称
{
    枚举值....
}
```
```csharp
enum Day {Sun, Mon, Tue, Wed, Thu, Fri, Sat}; // 0 1 2 3 4 5 6
enum Color {red=2,blue=7,green=11};


static void Main()
{
    int x = (int)Day.Sun;
    int y = (int)Day.Fri;
    Console.WriteLine("Sun = {0}", x);
    Console.WriteLine("Fri = {0}", y); 
}
```

### 面向对象
#### 类
类的定义格式（类的默认访问标识符是 **internal**，成员的默认访问标识符是 **private**。）：
```csharp
访问控制权限 class 类名
{
    访问控制权限 数据类型 成员变量;
    ...

    访问控制权限 返回值类型 成员方法名(参数列表)
    {
        // 方法体
    }
    ...
}
```

构造函数：与类名同名的成员函数，当创建类的新对象时执行。（类中提供一个默认的构造函数，没有任何参数。）


使用`static`定义的类成员变量，无论有多少个对象被创建，只会有一个该静态成员的副本。

#### 继承
一个类可以继承自另一个类，被称为基类（父类）和派生类（子类）。

- C# 不支持类的多重继承，但支持接口的多重继承，一个类可以实现多个接口。
- 派生类会继承基类的成员（字段、方法、属性等），除非它们被明确地标记为私有（private）。
- 派生类可以通过关键字`base`来调用基类的构造函数和方法。

继承的写法（伪代码）：
```csharp
访问控制修饰符 class 基类名
{
    ...
}

class 派生类 : 基类
{
    ...
}
```
:::info
子类只需要在类名后面写上`: 要继承的父类`即可
:::


#### 继承接口
接口通过关键字 `interface`来定义，是一组行为的抽象，不提供方法的实现。<br />一个接口可以继承自一个或多个其他接口，派生接口继承了基接口的所有成员。派生接口可以扩展基接口的成员列表，但不能改变它们的访问修饰符。

继承接口的写法（和类继承一样的写法）：
```csharp
// 基接口  父接口
interface IBaseInterface
{
    void Method1();
}

// 派生接口  子接口
interface IDerivedInterface : IBaseInterface
{
    void Method2();
}
```

#### 实现接口
类实现接口，需要重写（提供）接口中定义的所有方法。<br />类实现接口的写法，和类继承写法一致`:要实现的接口`
```csharp
// 如下面的Test类实现了上面的 IDerivedInterface 接口，
// 则需要重写Method1(),Method2()两个方法 
class Test : IDerivedInterface
{
    public void Method1()
    {
        Console.WriteLine("Method1 implementation");
    }

    public void Method2()
    {
        Console.WriteLine("Method2 implementation");
    }
}
```

#### 继承抽象类
抽象类通过关键字`abstract`来定义，**抽象类**包含抽象方法，抽象方法可被派生类实现。

- 抽象类不能`new`实例对象
- 含有抽象方法的一定是抽象类
- 抽象类不能被声明为`sealed 密封类`（密封类不能被继承）
```csharp
abstract class Shape
{
    abstract public int area();
}
class Rectangle:  Shape
   {
    private int length;
    private int width;
    public Rectangle( int a=0, int b=0)
    {
        length = a;
        width = b;
    }
    public override int area ()
    {
        Console.WriteLine("Rectangle 类的面积：");
        return (width * length);
    }
}
```
#### 多态性

- 静态多态性：函数的响应在编译时发生（_tips:当你的语法写错时，编辑器会编译飘红_）
   - 函数重载 ： 一个类中存在多个同名的函数，函数的参数类型不同，个数不同，返回值类型不同，这就是重、函数重载 。
   - 运算符重载：重载运算符是具有特殊名称的函数，是通过关键字 **operator** 后跟运算符的符号来定义的。与其他函数一样，重载运算符有返回类型和参数列表。(如下面的代码段)
- 动态多态性：函数的响应在运行时发生
   - 函数重写：即当子类继承父类，或者子类继承某个抽象父类，或类实现某些抽象接口时，重写函数，提供函数方法体。

```csharp
// 重载 + 运算符来把两个 Box 对象相加
public static Box operator+ (Box b, Box c)
{
    Box box = new Box();
    box.length = b.length + c.length;
    box.breadth = b.breadth + c.breadth;
    box.height = b.height + c.height;
    return box;
}
```
### 异常处理
_C# 异常处理时建立在四个关键词之上的：**try**、**catch**、**finally** 和 **throw**。_

- **try**：一个 try 块标识了一个将被激活的特定的异常的代码块。后跟一个或多个 catch 块。
- **catch**：程序通过异常处理程序捕获异常。catch 关键字表示异常的捕获。
- **finally**：finally 块用于执行给定的语句，不管异常是否被抛出都会执行。例如，如果您打开一个文件，不管是否出现异常文件都要被关闭。
- **throw**：当问题出现时，程序抛出一个异常。使用 throw 关键字来完成。

System.Exception:

- System.ApplicationException  应用程序生成的异常，所有自定义异常都派生于该类
- System.SystemException 预定义的系统异常的基类：
   - System.IO.IOException 处理 I/O 错误。
   - System.IndexOutOfRangeException 处理当方法指向超出范围的数组索引时生成的错误。
   - System.ArrayTypeMismatchException 处理数组类型不匹配时生成的异常
   - System.NullReferenceException 处理空引用对象生成的异常
   - System.DivideByZeroException 处理零除异常
   - System.InvalidCastException 处理在类型转换期间生成的错误
   - System.OutOfMemoryException 处理空闲内存不足生成的错误
   - System.StackOverflowException 处理栈溢出生成的错误

#### 用户自定义异常（待补充）

### 文件操作




### 特性（注解）

> 特性是用于在运行时传递程序中各种元素（如：类、方法、结构、枚举、组件等）的行为信息的声明性标签。

语法格式：
```csharp
[特性名(必填参数,可选参数)]
元素
```

预定义特性（元注解）：

- AttributeUsage：规定特性可应用到的项目的类型
- Conditional：条件特性，哪些情况下该特性生效去使用
- Obsolete：过时特性，标记哪些方法是过时的，应该使用新的方法函数。

#### ArrtibuteUsage 属性代理标记
```csharp
[ArrtibuteUsage(
    validon, // 规定特性可以被放置在哪些元素上
    AllowMutiple=allowmutiple, // 是否为多用的  true | false，指定是否可以在同一程序元素（类，方法，字段）上多次使用此特性
    Inherited=inherited // 特性是否可以被派生类继承
)]
```

例如：
```csharp
[AttributeUsage(AttributeTargets.Class |
AttributeTargets.Constructor |
AttributeTargets.Field |
AttributeTargets.Method |
AttributeTargets.Property, 
AllowMultiple = true)]

// 此特性可以被放置在类上，构造器上、字段上、方法上、属性上(貌似是提供了set,get的字段)、是多用的
```
#### Contional 条件标记
此特性用于标注，当哪些条件下，去执行
```csharp
[Conditional(
    conditionalSymbol // 条件，如：Debug | Trace
)]


[Conditional("DEBUG")]
```

#### Obsolete 过时标记
此特性用于标记一些不应该被使用的程序实体
```csharp
// 写法一：
[Obsolete(
    messsage // 字符串，描述项目为什么过时以及该替代使用什么。
)] 

// 写法二：
[Obsolte(
    message,
    iserror // 布尔值true|false 当为true时，编译器会提示错误。默认是false,会有一个警告
)]

```

#### 创建自定义特性

创建并使用自定义特性的步骤：

1. 声明自定义特性
2. 构建自定义特性
3. 在目标程序元素上应用自定义特性
4. 通过反射访问特性

自定义一个BugFix特性，用于存储调试程序获得的信息
```csharp
// 一个自定义特性 BugFix 被赋给类及其成员
[AttributeUsage(AttributeTargets.Class |
AttributeTargets.Constructor |
AttributeTargets.Field |
AttributeTargets.Method |
AttributeTargets.Property,
AllowMultiple = true)]

public class DeBugInfo : System.Attribute
{
  private int bugNo; // bug的代码编号
  private string developer; // 开发人员的名字
  private string lastReview; // 最后一次审查代码的日期
  public string message; // 消息提示

  public DeBugInfo(int bg, string dev, string d)
  {
      this.bugNo = bg;
      this.developer = dev;
      this.lastReview = d;
  }

  public int BugNo
  {
      get
      {
          return bugNo;
      }
  }
  public string Developer
  {
      get
      {
          return developer;
      }
  }
  public string LastReview
  {
      get
      {
          return lastReview;
      }
  }
  public string Message
  {
      get
      {
          return message;
      }
      set
      {
          message = value;
      }
  }
}
```

使用自定义特性
```csharp
[DeBugInfo(45, "Zara Ali", "12/8/2012", Message = "Return type mismatch")]
[DeBugInfo(49, "Nuha Ali", "10/10/2012", Message = "Unused variable")]
class Rectangle
{
  // 成员变量
  protected double length;
  protected double width;
  public Rectangle(double l, double w)
  {
      length = l;
      width = w;
  }
  [DeBugInfo(55, "Zara Ali", "19/10/2012",
  Message = "Return type mismatch")]
  public double GetArea()
  {
      return length * width;
  }
  [DeBugInfo(56, "Zara Ali", "19/10/2012")]
  public void Display()
  {
      Console.WriteLine("Length: {0}", length);
      Console.WriteLine("Width: {0}", width);
      Console.WriteLine("Area: {0}", GetArea());
  }
}
```

获取查看类特性
```csharp
class ExecuteRectangle
{
    static void Main(string[] args)
    {
        Rectangle r = new Rectangle(4.5, 7.5);
        r.Display();
        Type type = typeof(Rectangle);
        // 遍历 Rectangle 类的特性
        foreach (Object attributes in type.GetCustomAttributes(false))
        {
            DeBugInfo dbi = (DeBugInfo)attributes;
            if (null != dbi)
            {
                Console.WriteLine("Bug no: {0}", dbi.BugNo);
                Console.WriteLine("Developer: {0}", dbi.Developer);
                Console.WriteLine("Last Reviewed: {0}",
                                 dbi.LastReview);
                Console.WriteLine("Remarks: {0}", dbi.Message);
            }
        }

        // 遍历方法特性
        foreach (MethodInfo m in type.GetMethods())
        {
            foreach (Attribute a in m.GetCustomAttributes(true))
            {
                DeBugInfo dbi = (DeBugInfo)a;
                if (null != dbi)
                {
                    Console.WriteLine("Bug no: {0}, for Method: {1}",
                                    dbi.BugNo, m.Name);
                    Console.WriteLine("Developer: {0}", dbi.Developer);
                    Console.WriteLine("Last Reviewed: {0}",
                                    dbi.LastReview);
                    Console.WriteLine("Remarks: {0}", dbi.Message);
                }
            }
        }
        Console.ReadLine();
    }
}
```


### 反射 Reflection

反射指程序可以访问、检测和修改它本身状态或行为的一种能力。

反射（Reflection）有下列用途：

- 它允许在运行时查看特性（attribute）信息。
- 它允许审查集合中的各种类型，以及实例化这些类型。
- 它允许延迟绑定的方法和属性（property）。
- 它允许在运行时创建新类型，然后使用这些类型执行一些任务。


#### 获取元数据
使用`System.Reflextion`类中的`MemberInfo`对象去获取与类相关的特性

```csharp
// 如：
System.Reflection.MeberInfo info = typeof(Test.class);

object[] attributes = info.GetCustomAttributes(true);
for (int i = 0; i < attributes.Length; i++)
{
    System.Console.WriteLine(attributes[i]);
}
```


### 属性
> **_属性（Property）_**_ 是类（class）、结构（structure）和接口（interface）的命名（named）成员。类或结构中的成员变量或方法称为 _**_域（Field）_**_。属性（Property）是域（Field）的扩展，且可使用相同的语法来访问。它们使用 _**_访问器（accessors）_**_ 让私有域的值可被读写或操作。_

<br />
#### 访问器 Accessors
> 简白的说：其实就是get,set的一种语法糖^_^

```csharp
private string code = "xx";
private int age = 11;

public string Code
{
    get
    {
        return code;
    }
    set
    {
        code = value;
    }
}


public int Age
{
    get
    {
        return age;
    }
    set
    {
        age = value;
    }
}
```


简单使用案例：
```csharp
class Student
{

    private string code = "N.A";
    private string name = "not known";
    private int age = 0;

    // 声明类型为 string 的 Code 属性
    public string Code
    {
        get
        {
            return code;
        }
        set
        {
            code = value;
        }
    }

    // 声明类型为 string 的 Name 属性
    public string Name
    {
        get
        {
            return name;
        }
        set
        {
            name = value;
        }
    }

    // 声明类型为 int 的 Age 属性
    public int Age
    {
        get
        {
            return age;
        }
        set
        {
            age = value;
        }
    }
    public override string ToString()
    {
        return "Code = " + Code +", Name = " + Name + ", Age = " + Age;
    }
}
class ExampleDemo
{
    public static void Main()
    {
        // 创建一个新的 Student 对象
        Student s = new Student();

        // 设置 student 的 code、name 和 age
        s.Code = "001";
        s.Name = "Zara";
        s.Age = 9;
        Console.WriteLine("Student Info: {0}", s);
        // 增加年龄
        s.Age += 1;
        Console.WriteLine("Student Info: {0}", s);
        Console.ReadKey();
    }
}

```


#### 抽象属性
抽象类可以拥有抽象属性，这些属性在派生类中被实现
```csharp
public abstract class Person
{
    public abstract string Name
    {
        get;
        set;
    }
    public abstract int Age
    {
        get;
        set;
    }
}
class Student : Person
   {

    private string code = "N.A";
    private string name = "N.A";
    private int age = 0;

    // 声明类型为 string 的 Code 属性
    public string Code
    {
        get
        {
            return code;
        }
        set
        {
            code = value;
        }
    }

    // 声明类型为 string 的 Name 属性
    public override string Name
    {
        get
        {
            return name;
        }
        set
        {
            name = value;
        }
    }

    // 声明类型为 int 的 Age 属性
    public override int Age
    {
        get
        {
            return age;
        }
        set
        {
            age = value;
        }
    }
    public override string ToString()
    {
        return "Code = " + Code +", Name = " + Name + ", Age = " + Age;
    }
}
```
