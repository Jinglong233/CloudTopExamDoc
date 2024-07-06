---
阿里云OSS配置
---

# 阿里云OSS配置

::: tip
这里只展示关于此项目中有关阿里云OSS的一些配置。<br/>
详细的配置可以参数官方的配置文档。[OSS快速入门_对象存储(OSS)-阿里云帮助中心](https://help.aliyun.com/zh/oss/getting-started/getting-started-with-oss)
:::
## 1. 创建Bucket

![img.png](../image/AliyunOssConfig/img.png)

![img_1.png](../image/AliyunOssConfig/img_1.png)

![img_12.png](../image/AliyunOssConfig/img_12.png)

## 2. 创建子用户

![img_2.png](../image/AliyunOssConfig/img_2.png)

![img_3.png](../image/AliyunOssConfig/img_3.png)

![img_4.png](../image/AliyunOssConfig/img_4.png)

![img_5.png](../image/AliyunOssConfig/img_5.png)

![img_11.png](../image/AliyunOssConfig/img_11.png)

::: tip
确认之后，会得到`accessKeyId`和`accessKeySecret`。
**<font color=red>重要：记得保存</font>**
:::

## 3. 添加授权

![img_6.png](../image/AliyunOssConfig/img_6.png)


![img_7.png](../image/AliyunOssConfig/img_7.png)

返回bucket列表，进入到自己刚才创建的Bucket中，新建目录
![img_8.png](../image/AliyunOssConfig/img_8.png)

![img_9.png](../image/AliyunOssConfig/img_9.png)

![img_10.png](../image/AliyunOssConfig/img_10.png)

## 4. 配置SpringBoot

``` yaml {1,6-8}
aliyun:
  oss:
    endpoint: 第一步中获取到的节点域名
    accessKeyId: 第二步创建用户获取到的accessKeyId
    accessKeySecret:  第二步创建用户获取到的accessKeySecret
    bucketName: 第一步创建的Bucket名称
    maxSize: 1
    dir:
      prefix: Bucket中创建的目录名 （此示例中是：picture/）
```
