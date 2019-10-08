# [LeetCode](https://leetcode.com/problemset/algorithms/)

[![Travis](https://img.shields.io/badge/language-JavaScript-green.svg)]()
[![Travis](https://img.shields.io/badge/language-Golang-red.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)

My LeetCode solutions.
- Javascipt(TypeScript)
- Golang

## 测试方法

- Javascipt(TypeScript)
base on mocha, you can use `assert` or `chai`.
1. install
```bash
yarn # npm install
```
2. exec test
```bash
yarn run test # npm run test
```

- Golang
Golang原生支持了单元测试, 执行`go test main_test.go main.go`即可
1. 命名测试文件
测试代码只需要放到以 _test.go 结尾的文件中即可。
golang的测试分为单元测试和性能测试，单元测试的测试用例以 Test 开头，性能测试以 Benchmark 开头
2. 执行测试文件
```bash
go test main_test.go main.go           # 单元测试
go test --cover main_test.go main.go   # 单元测试覆盖率
go test -bench=. main_test.go main.go  # 性能测试
```

## 算法复杂度

算法复杂度分为时间复杂度(Time)和空间复杂度(Space)。时间复杂度是度量算法执行的时间长短；而空间复杂度是度量算法所需存储空间的大小。

### 分类

按数量级递增排列，常见的时间复杂度有：
- 常数阶O(1)
- 对数阶O(log2n)
- 线性阶O(n)
- 线性对数阶O(nlog2n)
- 平方阶O(n2)
- 立方阶O(n3)
- ...
- k次方阶O(nk)
- 指数阶O(2n)
随着问题规模n的不断增大，上述时间复杂度不断增大，算法的执行效率越低。
