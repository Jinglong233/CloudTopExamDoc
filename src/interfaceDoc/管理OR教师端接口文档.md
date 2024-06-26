---
title: 一、管理/教师端接口文档
---



## 1. OSS操作相关


### 删除图片

**接口地址**:`/api/oss/delete/image`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|url|url|body|true|string||

### 批量删除图片


**接口地址**:`/api/oss/deleteBatch/image`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|urlList|urlList|body|true|array|string|


### 上传图片


**接口地址**:`/api/oss/upload/image`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|file|body|true|string||


## 2.发送消息操作


### 批量新增


**接口地址**:`/api/msg/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "content": "",
    "createUser": "",
    "createUserText": "",
    "id": "",
    "msgType": 0,
    "readCount": 0,
    "sendCount": 0,
    "sendTime": "",
    "state": 0,
    "templId": "",
    "title": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Msg|
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;createUser|||false|string||
|&emsp;&emsp;createUserText|||false|string||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;msgType|||false|integer(int32)||
|&emsp;&emsp;readCount|||false|integer(int32)||
|&emsp;&emsp;sendCount|||false|integer(int32)||
|&emsp;&emsp;sendTime|||false|string(date-time)||
|&emsp;&emsp;state|||false|integer(int32)||
|&emsp;&emsp;templId|||false|string||
|&emsp;&emsp;title|||false|string||


### 批量新增或修改


**接口地址**:`/api/msg/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "content": "",
    "createUser": "",
    "createUserText": "",
    "id": "",
    "msgType": 0,
    "readCount": 0,
    "sendCount": 0,
    "sendTime": "",
    "state": 0,
    "templId": "",
    "title": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Msg|
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;createUser|||false|string||
|&emsp;&emsp;createUserText|||false|string||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;msgType|||false|integer(int32)||
|&emsp;&emsp;readCount|||false|integer(int32)||
|&emsp;&emsp;sendCount|||false|integer(int32)||
|&emsp;&emsp;sendTime|||false|string(date-time)||
|&emsp;&emsp;state|||false|integer(int32)||
|&emsp;&emsp;templId|||false|string||
|&emsp;&emsp;title|||false|string||


### 根据Id删除


**接口地址**:`/api/msg/deleteMsgById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据Id查询


**接口地址**:`/api/msg/getMsgById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查询


**接口地址**:`/api/msg/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "content": "",
  "contentFuzzy": "",
  "createUser": "",
  "createUserFuzzy": "",
  "createUserText": "",
  "createUserTextFuzzy": "",
  "id": "",
  "idFuzzy": "",
  "msgType": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "readCount": 0,
  "sendCount": 0,
  "sendTime": "",
  "sendTimeEnd": "",
  "sendTimeStart": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "state": 0,
  "templId": "",
  "templIdFuzzy": "",
  "title": "",
  "titleFuzzy": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|MsgQuery|MsgQuery|
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;contentFuzzy|||false|string||
|&emsp;&emsp;createUser|||false|string||
|&emsp;&emsp;createUserFuzzy|||false|string||
|&emsp;&emsp;createUserText|||false|string||
|&emsp;&emsp;createUserTextFuzzy|||false|string||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;msgType|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;readCount|||false|integer(int32)||
|&emsp;&emsp;sendCount|||false|integer(int32)||
|&emsp;&emsp;sendTime|||false|string(date-time)||
|&emsp;&emsp;sendTimeEnd|||false|string||
|&emsp;&emsp;sendTimeStart|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;state|||false|integer(int32)||
|&emsp;&emsp;templId|||false|string||
|&emsp;&emsp;templIdFuzzy|||false|string||
|&emsp;&emsp;title|||false|string||
|&emsp;&emsp;titleFuzzy|||false|string||


### 发送消息


**接口地址**:`/api/msg/sendMessage`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptCode": "",
  "msgContent": "",
  "msgTitle": "",
  "msgType": [],
  "sendType": 0,
  "userList": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sendMessageDTO|sendMessageDTO|body|true|SendMessageDTO|SendMessageDTO|
|&emsp;&emsp;deptCode|||false|string||
|&emsp;&emsp;msgContent|||false|string||
|&emsp;&emsp;msgTitle|||false|string||
|&emsp;&emsp;msgType|||false|array|integer|
|&emsp;&emsp;sendType|||false|integer(int32)||
|&emsp;&emsp;userList|||false|array|string|


### 根据Id更新


**接口地址**:`/api/msg/updateMsgById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content||query|false|string||
|createUser||query|false|string||
|createUserText||query|false|string||
|id|id|query|false|string||
|msgType||query|false|integer(int32)||
|readCount||query|false|integer(int32)||
|sendCount||query|false|integer(int32)||
|sendTime||query|false|string(date-time)||
|state||query|false|integer(int32)||
|templId||query|false|string||
|title||query|false|string||

## 3. 学科操作


### 新增


**接口地址**:`/api/subject/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "deptCode": "",
  "description": "",
  "parentId": "",
  "title": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|addSubjectDTO|addSubjectDTO|body|true|AddSubjectDTO|AddSubjectDTO|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;deptCode|部门编码||false|string||
|&emsp;&emsp;description|描述||false|string||
|&emsp;&emsp;parentId|父学科Id||false|string||
|&emsp;&emsp;title|学科标题||false|string||


### 批量新增


**接口地址**:`/api/subject/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "description": "",
    "id": "",
    "parentId": "",
    "title": "",
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Subject|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;description|描述/备注||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;parentId|上层学科ID||false|string||
|&emsp;&emsp;title|学科名称||false|string||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 批量新增或修改


**接口地址**:`/api/subject/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "description": "",
    "id": "",
    "parentId": "",
    "title": "",
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Subject|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;description|描述/备注||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;parentId|上层学科ID||false|string||
|&emsp;&emsp;title|学科名称||false|string||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 根据Id删除


**接口地址**:`/api/subject/deleteSubjectById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据Id查询


**接口地址**:`/api/subject/getSubjectById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查询


**接口地址**:`/api/subject/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "deptText": "",
  "description": "",
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "parentId": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "title": "",
  "updateBy": "",
  "updateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|SubjectQuery|SubjectQuery|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;description|描述/备注||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;parentId|上层学科ID||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;title|学科名称||false|string||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 获取学科树列表


**接口地址**:`/api/subject/treeList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 根据Id更新


**接口地址**:`/api/subject/updateSubjectById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "id": "",
  "subject": {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "description": "",
    "id": "",
    "parentId": "",
    "title": "",
    "updateBy": "",
    "updateTime": ""
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|subjectDTO|subjectDTO|body|true|UpdateSubjectDTO|UpdateSubjectDTO|
|&emsp;&emsp;id|学科Id||false|string||
|&emsp;&emsp;subject|学科对象||false|Subject|Subject|
|&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deptCode|所属部门（专业）||false|string||
|&emsp;&emsp;&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;&emsp;&emsp;description|描述/备注||false|string||
|&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;parentId|上层学科ID||false|string||
|&emsp;&emsp;&emsp;&emsp;title|学科名称||false|string||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string||

## 4. 操作日志


### 新增


**接口地址**:`/api/operLog/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|false|integer(int32)||
|ip||query|false|string||
|operAddress||query|false|string||
|operationMethod||query|false|string||
|operTime||query|false|string(date-time)||
|operType||query|false|integer(int32)||
|requestArg||query|false|string||
|requestMode||query|false|string||
|returnArg||query|false|string||
|success||query|false|integer(int32)||
|url||query|false|string||
|userName||query|false|string||


### 批量新增


**接口地址**:`/api/operLog/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": 0,
    "ip": "",
    "operAddress": "",
    "operTime": "",
    "operType": 0,
    "operationMethod": "",
    "requestArg": "",
    "requestMode": "",
    "returnArg": "",
    "success": 0,
    "url": "",
    "userName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|OperLog|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;ip|||false|string||
|&emsp;&emsp;operAddress|||false|string||
|&emsp;&emsp;operTime|||false|string(date-time)||
|&emsp;&emsp;operType|||false|integer(int32)||
|&emsp;&emsp;operationMethod|||false|string||
|&emsp;&emsp;requestArg|||false|string||
|&emsp;&emsp;requestMode|||false|string||
|&emsp;&emsp;returnArg|||false|string||
|&emsp;&emsp;success|||false|integer(int32)||
|&emsp;&emsp;url|||false|string||
|&emsp;&emsp;userName|||false|string||


### 批量新增或修改


**接口地址**:`/api/operLog/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": 0,
    "ip": "",
    "operAddress": "",
    "operTime": "",
    "operType": 0,
    "operationMethod": "",
    "requestArg": "",
    "requestMode": "",
    "returnArg": "",
    "success": 0,
    "url": "",
    "userName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|OperLog|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;ip|||false|string||
|&emsp;&emsp;operAddress|||false|string||
|&emsp;&emsp;operTime|||false|string(date-time)||
|&emsp;&emsp;operType|||false|integer(int32)||
|&emsp;&emsp;operationMethod|||false|string||
|&emsp;&emsp;requestArg|||false|string||
|&emsp;&emsp;requestMode|||false|string||
|&emsp;&emsp;returnArg|||false|string||
|&emsp;&emsp;success|||false|integer(int32)||
|&emsp;&emsp;url|||false|string||
|&emsp;&emsp;userName|||false|string||


### 根据Id删除


**接口地址**:`/api/operLog/deleteOperLogById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|integer(int32)||


### 根据Id查询


**接口地址**:`/api/operLog/getOperLogById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|integer(int32)||


### 根据条件分页查询


**接口地址**:`/api/operLog/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "id": 0,
  "ip": "",
  "ipFuzzy": "",
  "operAddress": "",
  "operAddressFuzzy": "",
  "operTime": "",
  "operTimeEnd": "",
  "operTimeStart": "",
  "operType": 0,
  "operationMethod": "",
  "operationMethodFuzzy": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "requestArg": "",
  "requestArgFuzzy": "",
  "requestMode": "",
  "requestModeFuzzy": "",
  "returnArg": "",
  "returnArgFuzzy": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "success": 0,
  "url": "",
  "urlFuzzy": "",
  "userName": "",
  "userNameFuzzy": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|OperLogQuery|OperLogQuery|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;ip|||false|string||
|&emsp;&emsp;ipFuzzy|||false|string||
|&emsp;&emsp;operAddress|||false|string||
|&emsp;&emsp;operAddressFuzzy|||false|string||
|&emsp;&emsp;operTime|||false|string(date-time)||
|&emsp;&emsp;operTimeEnd|||false|string||
|&emsp;&emsp;operTimeStart|||false|string||
|&emsp;&emsp;operType|||false|integer(int32)||
|&emsp;&emsp;operationMethod|||false|string||
|&emsp;&emsp;operationMethodFuzzy|||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;requestArg|||false|string||
|&emsp;&emsp;requestArgFuzzy|||false|string||
|&emsp;&emsp;requestMode|||false|string||
|&emsp;&emsp;requestModeFuzzy|||false|string||
|&emsp;&emsp;returnArg|||false|string||
|&emsp;&emsp;returnArgFuzzy|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;success|||false|integer(int32)||
|&emsp;&emsp;url|||false|string||
|&emsp;&emsp;urlFuzzy|||false|string||
|&emsp;&emsp;userName|||false|string||
|&emsp;&emsp;userNameFuzzy|||false|string||


### 根据Id更新


**接口地址**:`/api/operLog/updateOperLogById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|integer(int32)||
|ip||query|false|string||
|operAddress||query|false|string||
|operationMethod||query|false|string||
|operTime||query|false|string(date-time)||
|operType||query|false|integer(int32)||
|requestArg||query|false|string||
|requestMode||query|false|string||
|returnArg||query|false|string||
|success||query|false|integer(int32)||
|url||query|false|string||
|userName||query|false|string||

## 5. 数据分析统计


### 获取部门错题统计


**接口地址**:`/api/dataAnalysis/errorCount`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptCode": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|errorCountQuery|errorCountQuery|body|true|ErrorCountQuery|ErrorCountQuery|
|&emsp;&emsp;deptCode|||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||


### 分类获取每个题型中每个知识点的错题统计


**接口地址**:`/api/dataAnalysis/getWrongCountSummary`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 获取知识点


**接口地址**:`/api/dataAnalysis/knowledgeList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 获取题目占比信息


**接口地址**:`/api/dataAnalysis/quTypeProportion`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 获取最近其他考试信息


**接口地址**:`/api/dataAnalysis/recentExamInfo`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 获取男女占比


**接口地址**:`/api/dataAnalysis/sexProportion`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 时间段错题分析统计


**接口地址**:`/api/dataAnalysis/temporalErrorAnalysis`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 获取错题占比前五的知识点


**接口地址**:`/api/dataAnalysis/topFiveWrongTopics`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 根据部门获取学科统计


**接口地址**:`/api/dataAnalysis/wrongDeptSubject`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deptCode|deptCode|body|true|string||


### 根据部门获取知识点统计


**接口地址**:`/api/dataAnalysis/wrongDeptWrongKn`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deptCode|deptCode|body|true|string||



## 6. 消息模板


### 新增


**接口地址**:`/api/tmpl/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content||query|false|string||
|id||query|false|string||
|title||query|false|string||


### 批量新增


**接口地址**:`/api/tmpl/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "content": "",
    "id": "",
    "title": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Tmpl|
|&emsp;&emsp;content|模板内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;title|模板标题||false|string||


### 批量新增或修改


**接口地址**:`/api/tmpl/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "content": "",
    "id": "",
    "title": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Tmpl|
|&emsp;&emsp;content|模板内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;title|模板标题||false|string||


### 根据Id删除


**接口地址**:`/api/tmpl/deleteTmplById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据Id查询


**接口地址**:`/api/tmpl/getTmplById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查询


**接口地址**:`/api/tmpl/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content||query|false|string||
|contentFuzzy||query|false|string||
|id||query|false|string||
|idFuzzy||query|false|string||
|orderBy||query|false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||
|sequence||query|false|string||
|simplePage.countTotal||query|false|integer(int32)||
|simplePage.end||query|false|integer(int32)||
|simplePage.pageNo||query|false|integer(int32)||
|simplePage.pageSize||query|false|integer(int32)||
|simplePage.pageTotal||query|false|integer(int32)||
|simplePage.start||query|false|integer(int32)||
|title||query|false|string||
|titleFuzzy||query|false|string||


### 根据Id更新


**接口地址**:`/api/tmpl/updateTmplById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|content||query|false|string||
|id|id|query|false|string||
|title||query|false|string||

## 7. 用户答案操作


### 获取用户答案


**接口地址**:`/api/userAnswer/getDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "answer": "",
  "answerId": "",
  "answered": 0,
  "examRecordId": "",
  "id": "",
  "isRight": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quId": "",
  "score": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "sort": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userAnswerQuery|userAnswerQuery|body|true|UserAnswerQuery|UserAnswerQuery|
|&emsp;&emsp;answer|填空，主观题答案||false|string||
|&emsp;&emsp;answerId|答案Id||false|string||
|&emsp;&emsp;answered|是否已答0:未答1:已答||false|integer(int32)||
|&emsp;&emsp;examRecordId|所属记录Id||false|string||
|&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;isRight|是否答对0:错1:对||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quId|关联的题目Id||false|string||
|&emsp;&emsp;score|得分||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;sort|题目排序（只在乱序的时候生效）||false|string||
|&emsp;&emsp;userId|用户id||false|string||


### 根据Id更新


**接口地址**:`/api/userAnswer/updateById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "userAnswer": {
    "answer": "",
    "answerId": "",
    "answered": 0,
    "examRecordId": "",
    "id": "",
    "isRight": 0,
    "quId": "",
    "score": 0,
    "sort": "",
    "userId": ""
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userAnswer|userAnswer|body|true|UpdateUserAnswerDTO|UpdateUserAnswerDTO|
|&emsp;&emsp;userAnswer|用户答案||false|UserAnswer|UserAnswer|
|&emsp;&emsp;&emsp;&emsp;answer|填空，主观题答案||false|string||
|&emsp;&emsp;&emsp;&emsp;answerId|答案Id||false|string||
|&emsp;&emsp;&emsp;&emsp;answered|是否已答0:未答1:已答||false|integer||
|&emsp;&emsp;&emsp;&emsp;examRecordId|所属记录Id||false|string||
|&emsp;&emsp;&emsp;&emsp;id|id||false|string||
|&emsp;&emsp;&emsp;&emsp;isRight|是否答对0:错1:对||false|integer||
|&emsp;&emsp;&emsp;&emsp;quId|关联的题目Id||false|string||
|&emsp;&emsp;&emsp;&emsp;score|得分||false|integer||
|&emsp;&emsp;&emsp;&emsp;sort|题目排序（只在乱序的时候生效）||false|string||
|&emsp;&emsp;&emsp;&emsp;userId|用户id||false|string||


## 8. 登录日志


### 新增


**接口地址**:`/api/loginLog/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|false|integer(int32)||
|ip||query|false|string||
|loginAddress||query|false|string||
|loginState||query|false|integer(int32)||
|loginTime||query|false|string(date-time)||
|operMsg||query|false|string||
|userName||query|false|string||


### 批量新增


**接口地址**:`/api/loginLog/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": 0,
    "ip": "",
    "loginAddress": "",
    "loginState": 0,
    "loginTime": "",
    "operMsg": "",
    "userName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|LoginLog|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;ip|||false|string||
|&emsp;&emsp;loginAddress|||false|string||
|&emsp;&emsp;loginState|||false|integer(int32)||
|&emsp;&emsp;loginTime|||false|string(date-time)||
|&emsp;&emsp;operMsg|||false|string||
|&emsp;&emsp;userName|||false|string||


### 批量新增或修改


**接口地址**:`/api/loginLog/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": 0,
    "ip": "",
    "loginAddress": "",
    "loginState": 0,
    "loginTime": "",
    "operMsg": "",
    "userName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|LoginLog|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;ip|||false|string||
|&emsp;&emsp;loginAddress|||false|string||
|&emsp;&emsp;loginState|||false|integer(int32)||
|&emsp;&emsp;loginTime|||false|string(date-time)||
|&emsp;&emsp;operMsg|||false|string||
|&emsp;&emsp;userName|||false|string||


### 批量删除


**接口地址**:`/api/loginLog/deleteBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|deleteList|deleteList|body|true|array|integer|


### 根据Id删除


**接口地址**:`/api/loginLog/deleteLoginLogById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|integer||


### 根据Id查询


**接口地址**:`/api/loginLog/getLoginLogById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|integer(int32)||


### 根据条件分页查询


**接口地址**:`/api/loginLog/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "id": 0,
  "ip": "",
  "ipFuzzy": "",
  "loginAddress": "",
  "loginAddressFuzzy": "",
  "loginState": 0,
  "loginTime": "",
  "loginTimeEnd": "",
  "loginTimeStart": "",
  "operMsg": "",
  "operMsgFuzzy": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "userName": "",
  "userNameFuzzy": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|LoginLogQuery|LoginLogQuery|
|&emsp;&emsp;id|||false|integer(int32)||
|&emsp;&emsp;ip|||false|string||
|&emsp;&emsp;ipFuzzy|||false|string||
|&emsp;&emsp;loginAddress|||false|string||
|&emsp;&emsp;loginAddressFuzzy|||false|string||
|&emsp;&emsp;loginState|||false|integer(int32)||
|&emsp;&emsp;loginTime|||false|string(date-time)||
|&emsp;&emsp;loginTimeEnd|||false|string||
|&emsp;&emsp;loginTimeStart|||false|string||
|&emsp;&emsp;operMsg|||false|string||
|&emsp;&emsp;operMsgFuzzy|||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;userName|||false|string||
|&emsp;&emsp;userNameFuzzy|||false|string||


### 根据Id更新


**接口地址**:`/api/loginLog/updateLoginLogById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|integer(int32)||
|ip||query|false|string||
|loginAddress||query|false|string||
|loginState||query|false|integer(int32)||
|loginTime||query|false|string(date-time)||
|operMsg||query|false|string||
|userName||query|false|string||


## 9. 管理员管理用户


### 批量导入用户信息接口（预留）


**接口地址**:`/api/user/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "avatar": "",
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "email": "",
    "id": "",
    "password": "",
    "phone": "",
    "realName": "",
    "role": "",
    "salt": "",
    "sex": 0,
    "state": 0,
    "updateBy": "",
    "updateTime": "",
    "userName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|User|
|&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;salt|盐值||false|string||
|&emsp;&emsp;sex|性别0:女1:男||false|integer(int32)||
|&emsp;&emsp;state|状态0:正常1:禁用||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;userName|用户名||false|string||


### 批量新增或修改


**接口地址**:`/api/user/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "avatar": "",
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "email": "",
    "id": "",
    "password": "",
    "phone": "",
    "realName": "",
    "role": "",
    "salt": "",
    "sex": 0,
    "state": 0,
    "updateBy": "",
    "updateTime": "",
    "userName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|User|
|&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;salt|盐值||false|string||
|&emsp;&emsp;sex|性别0:女1:男||false|integer(int32)||
|&emsp;&emsp;state|状态0:正常1:禁用||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;userName|用户名||false|string||


### 删除用户


**接口地址**:`/api/user/deleteUserById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 获取找回密码邮箱验证码


**接口地址**:`/api/user/getRetrievePasswordCode`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "email": "",
  "password": "",
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|retrievePasswordDTO|retrievePasswordDTO|body|true|RetrievePasswordDTO|RetrievePasswordDTO|
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;password|验证码正确之后，该字段用于接收新密码||false|string||
|&emsp;&emsp;userName|用户名||false|string||


### 根据Id查询用户信息


**接口地址**:`/api/user/getUserById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 通过token获取登录用户信息


**接口地址**:`/api/user/info`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 分页获取部门人员


**接口地址**:`/api/user/loadDeptUserList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "avatar": "",
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "deptText": "",
  "email": "",
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "password": "",
  "phone": "",
  "realName": "",
  "role": "",
  "salt": "",
  "sequence": "",
  "sex": 0,
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "state": 0,
  "updateBy": "",
  "updateTime": "",
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|UserQuery|UserQuery|
|&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;salt|盐值||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;sex|性别0:女1:男||false|integer(int32)||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;state|状态0:正常1:禁用||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;userName|用户名||false|string||


### loadDatalist


**接口地址**:`/api/user/loadUserList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "avatar": "",
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "deptText": "",
  "email": "",
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "password": "",
  "phone": "",
  "realName": "",
  "role": "",
  "salt": "",
  "sequence": "",
  "sex": 0,
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "state": 0,
  "updateBy": "",
  "updateTime": "",
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|UserQuery|UserQuery|
|&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;salt|盐值||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;sex|性别0:女1:男||false|integer(int32)||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;state|状态0:正常1:禁用||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;userName|用户名||false|string||


### 管理员-教师登录


**接口地址**:`/api/user/login`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "password": "",
  "phone": "",
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|loginDTO|loginDTO|body|true|LoginDTO|LoginDTO|
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机号||false|string||
|&emsp;&emsp;userName|用户名||false|string||


### 管理员-教师退出登录


**接口地址**:`/api/user/logout`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 注册


**接口地址**:`/api/user/register`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptCode": "",
  "email": "",
  "password": "",
  "phone": "",
  "realName": "",
  "role": "",
  "sex": 0,
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|addUserDTO|addUserDTO|body|true|AddUserDTO|AddUserDTO|
|&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;sex|性别0:女1:男||false|integer(int32)||
|&emsp;&emsp;userName|用户名||false|string||


### 找回密码


**接口地址**:`/api/user/retrievePassword`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "email": "",
  "password": "",
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|retrievePasswordDTO|retrievePasswordDTO|body|true|RetrievePasswordDTO|RetrievePasswordDTO|
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;password|验证码正确之后，该字段用于接收新密码||false|string||
|&emsp;&emsp;userName|用户名||false|string||


### 更新用户信息


**接口地址**:`/api/user/updateUserById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "id": "",
  "user": {
    "avatar": "",
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "email": "",
    "id": "",
    "password": "",
    "phone": "",
    "realName": "",
    "role": "",
    "salt": "",
    "sex": 0,
    "state": 0,
    "updateBy": "",
    "updateTime": "",
    "userName": ""
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateUserDTO|updateUserDTO|body|true|UpdateUserDTO|UpdateUserDTO|
|&emsp;&emsp;id|用户Id||false|string||
|&emsp;&emsp;user|用户对象||false|User|User|
|&emsp;&emsp;&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;&emsp;&emsp;salt|盐值||false|string||
|&emsp;&emsp;&emsp;&emsp;sex|性别0:女1:男||false|integer||
|&emsp;&emsp;&emsp;&emsp;state|状态0:正常1:禁用||false|integer||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;userName|用户名||false|string||


### 修改用户密码


**接口地址**:`/api/user/updateUserPassword`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "newPassword": "",
  "oldPassword": "",
  "userId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateUserPasswordDTO|updateUserPasswordDTO|body|true|UpdateUserPasswordDTO|UpdateUserPasswordDTO|
|&emsp;&emsp;newPassword|新密码||false|string||
|&emsp;&emsp;oldPassword|原密码||false|string||
|&emsp;&emsp;userId|用户Id||false|string||


### 用户上传头像


**接口地址**:`/api/user/upload/avatar`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|file|file|body|true|string||


### 获取用户总数


**接口地址**:`/api/user/userCount`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "avatar": "",
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "deptText": "",
  "email": "",
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "password": "",
  "phone": "",
  "realName": "",
  "role": "",
  "salt": "",
  "sequence": "",
  "sex": 0,
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "state": 0,
  "updateBy": "",
  "updateTime": "",
  "userName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|userQuery|userQuery|body|true|UserQuery|UserQuery|
|&emsp;&emsp;avatar|头像||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编号||false|string||
|&emsp;&emsp;deptText|部门名称||false|string||
|&emsp;&emsp;email|邮箱||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;password|密码||false|string||
|&emsp;&emsp;phone|手机||false|string||
|&emsp;&emsp;realName|真实姓名||false|string||
|&emsp;&emsp;role|角色||false|string||
|&emsp;&emsp;salt|盐值||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;sex|性别0:女1:男||false|integer(int32)||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;state|状态0:正常1:禁用||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||
|&emsp;&emsp;userName|用户名||false|string||


## 10. 考试操作


### 新增


**接口地址**:`/api/exam/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "duration": 0,
  "endTime": "",
  "handMin": 0,
  "lateMax": 0,
  "openType": 0,
  "paperId": "",
  "qualifyScore": 0,
  "resultType": 0,
  "startTime": "",
  "thanks": "",
  "title": "",
  "userList": []
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|addExamDTO|addExamDTO|body|true|AddExamDTO|AddExamDTO|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|考试部门编码||false|string||
|&emsp;&emsp;duration|考试时长||false|integer(int32)||
|&emsp;&emsp;endTime|考试结束时间||false|string(date-time)||
|&emsp;&emsp;handMin|最少答题时间||false|integer(int32)||
|&emsp;&emsp;lateMax|允许迟到时间||false|integer(int32)||
|&emsp;&emsp;openType|开放权限 0:完全公开 1:指定学生||false|integer(int32)||
|&emsp;&emsp;paperId|试卷ID||false|string||
|&emsp;&emsp;qualifyScore|及格分数||false|integer(int32)||
|&emsp;&emsp;resultType|结果显示类型（只显示分数/显示分数+答题详情/展示答题详情）||false|integer(int32)||
|&emsp;&emsp;startTime|考试开始时间||false|string(date-time)||
|&emsp;&emsp;thanks|感谢语||false|string||
|&emsp;&emsp;title|考试标题||false|string||
|&emsp;&emsp;userList|用户列表,在指定成员的情况下有用||false|array|string|


### 批量新增


**接口地址**:`/api/exam/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "duration": 0,
    "endTime": "",
    "handMin": 0,
    "id": "",
    "lateMax": 0,
    "openType": 0,
    "paperId": "",
    "qualifyScore": 0,
    "resultType": 0,
    "reviewQuire": 0,
    "startJobId": 0,
    "startTime": "",
    "statue": 0,
    "stopJobId": 0,
    "thanks": "",
    "title": "",
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Exam|
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;deptCode|||false|string||
|&emsp;&emsp;deptText|||false|string||
|&emsp;&emsp;duration|||false|integer(int32)||
|&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;handMin|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;lateMax|||false|integer(int32)||
|&emsp;&emsp;openType|||false|integer(int32)||
|&emsp;&emsp;paperId|||false|string||
|&emsp;&emsp;qualifyScore|||false|integer(int32)||
|&emsp;&emsp;resultType|||false|integer(int32)||
|&emsp;&emsp;reviewQuire|||false|integer(int32)||
|&emsp;&emsp;startJobId|||false|integer(int32)||
|&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;statue|||false|integer(int32)||
|&emsp;&emsp;stopJobId|||false|integer(int32)||
|&emsp;&emsp;thanks|||false|string||
|&emsp;&emsp;title|||false|string||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||


### 批量新增或修改


**接口地址**:`/api/exam/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptText": "",
    "duration": 0,
    "endTime": "",
    "handMin": 0,
    "id": "",
    "lateMax": 0,
    "openType": 0,
    "paperId": "",
    "qualifyScore": 0,
    "resultType": 0,
    "reviewQuire": 0,
    "startJobId": 0,
    "startTime": "",
    "statue": 0,
    "stopJobId": 0,
    "thanks": "",
    "title": "",
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Exam|
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;deptCode|||false|string||
|&emsp;&emsp;deptText|||false|string||
|&emsp;&emsp;duration|||false|integer(int32)||
|&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;handMin|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;lateMax|||false|integer(int32)||
|&emsp;&emsp;openType|||false|integer(int32)||
|&emsp;&emsp;paperId|||false|string||
|&emsp;&emsp;qualifyScore|||false|integer(int32)||
|&emsp;&emsp;resultType|||false|integer(int32)||
|&emsp;&emsp;reviewQuire|||false|integer(int32)||
|&emsp;&emsp;startJobId|||false|integer(int32)||
|&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;statue|||false|integer(int32)||
|&emsp;&emsp;stopJobId|||false|integer(int32)||
|&emsp;&emsp;thanks|||false|string||
|&emsp;&emsp;title|||false|string||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||


### 根据Id删除


**接口地址**:`/api/exam/deleteExamById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 获取批阅考试


**接口地址**:`/api/exam/getCorrectExam`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createByFuzzy": "",
  "createTime": "",
  "createTimeEnd": "",
  "createTimeStart": "",
  "deptCode": "",
  "deptCodeFuzzy": "",
  "deptText": "",
  "deptTextFuzzy": "",
  "duration": 0,
  "endTime": "",
  "endTimeEnd": "",
  "endTimeStart": "",
  "handMin": 0,
  "id": "",
  "idFuzzy": "",
  "lateMax": 0,
  "openType": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "paperId": "",
  "paperIdFuzzy": "",
  "qualifyScore": 0,
  "resultType": 0,
  "reviewQuire": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "startJobId": 0,
  "startTime": "",
  "startTimeEnd": "",
  "startTimeStart": "",
  "statue": 0,
  "stopJobId": 0,
  "thanks": "",
  "thanksFuzzy": "",
  "title": "",
  "titleFuzzy": "",
  "updateBy": "",
  "updateByFuzzy": "",
  "updateTime": "",
  "updateTimeEnd": "",
  "updateTimeStart": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|examQuery|examQuery|body|true|ExamQuery|ExamQuery|
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createByFuzzy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;createTimeEnd|||false|string||
|&emsp;&emsp;createTimeStart|||false|string||
|&emsp;&emsp;deptCode|||false|string||
|&emsp;&emsp;deptCodeFuzzy|||false|string||
|&emsp;&emsp;deptText|||false|string||
|&emsp;&emsp;deptTextFuzzy|||false|string||
|&emsp;&emsp;duration|||false|integer(int32)||
|&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;endTimeEnd|||false|string||
|&emsp;&emsp;endTimeStart|||false|string||
|&emsp;&emsp;handMin|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;lateMax|||false|integer(int32)||
|&emsp;&emsp;openType|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;paperId|||false|string||
|&emsp;&emsp;paperIdFuzzy|||false|string||
|&emsp;&emsp;qualifyScore|||false|integer(int32)||
|&emsp;&emsp;resultType|||false|integer(int32)||
|&emsp;&emsp;reviewQuire|||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;startJobId|||false|integer(int32)||
|&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;startTimeEnd|||false|string||
|&emsp;&emsp;startTimeStart|||false|string||
|&emsp;&emsp;statue|||false|integer(int32)||
|&emsp;&emsp;stopJobId|||false|integer(int32)||
|&emsp;&emsp;thanks|||false|string||
|&emsp;&emsp;thanksFuzzy|||false|string||
|&emsp;&emsp;title|||false|string||
|&emsp;&emsp;titleFuzzy|||false|string||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateByFuzzy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;updateTimeEnd|||false|string||
|&emsp;&emsp;updateTimeStart|||false|string||


### 根据考试Id查询考试信息


**接口地址**:`/api/exam/getExamById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 获取考试题目分析


**接口地址**:`/api/exam/getExamQuAnalyse`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|examId|examId|body|true|string||


### 获取试卷题目分析


**接口地址**:`/api/exam/getPaperQuAnalyse`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|paperId|paperId|body|true|string||


### 获取服务器时间


**接口地址**:`/api/exam/getServerTime`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 根据条件分页查询


**接口地址**:`/api/exam/loadExamList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createByFuzzy": "",
  "createTime": "",
  "createTimeEnd": "",
  "createTimeStart": "",
  "deptCode": "",
  "deptCodeFuzzy": "",
  "deptText": "",
  "deptTextFuzzy": "",
  "duration": 0,
  "endTime": "",
  "endTimeEnd": "",
  "endTimeStart": "",
  "handMin": 0,
  "id": "",
  "idFuzzy": "",
  "lateMax": 0,
  "openType": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "paperId": "",
  "paperIdFuzzy": "",
  "qualifyScore": 0,
  "resultType": 0,
  "reviewQuire": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "startJobId": 0,
  "startTime": "",
  "startTimeEnd": "",
  "startTimeStart": "",
  "statue": 0,
  "stopJobId": 0,
  "thanks": "",
  "thanksFuzzy": "",
  "title": "",
  "titleFuzzy": "",
  "updateBy": "",
  "updateByFuzzy": "",
  "updateTime": "",
  "updateTimeEnd": "",
  "updateTimeStart": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|ExamQuery|ExamQuery|
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createByFuzzy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;createTimeEnd|||false|string||
|&emsp;&emsp;createTimeStart|||false|string||
|&emsp;&emsp;deptCode|||false|string||
|&emsp;&emsp;deptCodeFuzzy|||false|string||
|&emsp;&emsp;deptText|||false|string||
|&emsp;&emsp;deptTextFuzzy|||false|string||
|&emsp;&emsp;duration|||false|integer(int32)||
|&emsp;&emsp;endTime|||false|string(date-time)||
|&emsp;&emsp;endTimeEnd|||false|string||
|&emsp;&emsp;endTimeStart|||false|string||
|&emsp;&emsp;handMin|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;lateMax|||false|integer(int32)||
|&emsp;&emsp;openType|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;paperId|||false|string||
|&emsp;&emsp;paperIdFuzzy|||false|string||
|&emsp;&emsp;qualifyScore|||false|integer(int32)||
|&emsp;&emsp;resultType|||false|integer(int32)||
|&emsp;&emsp;reviewQuire|||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;startJobId|||false|integer(int32)||
|&emsp;&emsp;startTime|||false|string(date-time)||
|&emsp;&emsp;startTimeEnd|||false|string||
|&emsp;&emsp;startTimeStart|||false|string||
|&emsp;&emsp;statue|||false|integer(int32)||
|&emsp;&emsp;stopJobId|||false|integer(int32)||
|&emsp;&emsp;thanks|||false|string||
|&emsp;&emsp;thanksFuzzy|||false|string||
|&emsp;&emsp;title|||false|string||
|&emsp;&emsp;titleFuzzy|||false|string||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateByFuzzy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;updateTimeEnd|||false|string||
|&emsp;&emsp;updateTimeStart|||false|string||


### qrcode


**接口地址**:`/api/exam/qrcode/{examId}`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|examId|examId|path|true|string||


### 根据Id更新


**接口地址**:`/api/exam/updateExamById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptCode": "",
  "duration": 0,
  "endTime": "",
  "handMin": 0,
  "id": "",
  "lateMax": 0,
  "openType": 0,
  "paperId": "",
  "qualifyScore": 0,
  "resultType": 0,
  "startTime": "",
  "thanks": "",
  "title": "",
  "updateBy": "",
  "updateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateExamDTO|updateExamDTO|body|true|UpdateExamDTO|UpdateExamDTO|
|&emsp;&emsp;deptCode|考试部门编码||false|string||
|&emsp;&emsp;duration|考试时长||false|integer(int32)||
|&emsp;&emsp;endTime|考试结束时间||false|string(date-time)||
|&emsp;&emsp;handMin|最少答题时间||false|integer(int32)||
|&emsp;&emsp;id|考试Id||false|string||
|&emsp;&emsp;lateMax|允许迟到时间||false|integer(int32)||
|&emsp;&emsp;openType|开放权限 0:完全公开 1:指定学生||false|integer(int32)||
|&emsp;&emsp;paperId|试卷ID||false|string||
|&emsp;&emsp;qualifyScore|及格分数||false|integer(int32)||
|&emsp;&emsp;resultType|结果显示类型（只显示分数/显示分数+答题详情/展示答题详情）||false|integer(int32)||
|&emsp;&emsp;startTime|考试开始时间||false|string(date-time)||
|&emsp;&emsp;thanks|感谢语||false|string||
|&emsp;&emsp;title|考试标题||false|string||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


## 11. 角色操作


### 新增


**接口地址**:`/api/role/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "id": "",
  "remark": "",
  "roleName": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bean|bean|body|true|Role|Role|
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;roleName|角色名称||false|string||


### 批量新增


**接口地址**:`/api/role/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": "",
    "remark": "",
    "roleName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Role|
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;roleName|角色名称||false|string||


### 批量新增或修改


**接口地址**:`/api/role/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": "",
    "remark": "",
    "roleName": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Role|
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;roleName|角色名称||false|string||


### 根据Id删除


**接口地址**:`/api/role/deleteRoleById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据Id查询


**接口地址**:`/api/role/getRoleById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据条件分页查询


**接口地址**:`/api/role/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "remark": "",
  "roleName": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  }
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|RoleQuery|RoleQuery|
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;roleName|角色名称||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||


### 根据Id更新


**接口地址**:`/api/role/updateRoleById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||
|remark||query|false|string||
|roleName||query|false|string||



## 12. 训练


### 新增


**接口地址**:`/api/train/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|answerCount||query|false|integer(int32)||
|id||query|false|string||
|mode||query|false|integer(int32)||
|percent||query|false|string||
|quType||query|false|integer(int32)||
|repoId||query|false|string||
|rightCount||query|false|integer(int32)||
|state||query|false|integer(int32)||
|totalCount||query|false|integer(int32)||
|trainTime||query|false|string(date-time)||
|userId||query|false|string||


### 批量新增


**接口地址**:`/api/train/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "answerCount": 0,
    "id": "",
    "mode": 0,
    "percent": "",
    "quType": 0,
    "repoId": "",
    "rightCount": 0,
    "state": 0,
    "totalCount": 0,
    "trainTime": "",
    "userId": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Train|
|&emsp;&emsp;answerCount|回答数量||false|integer(int32)||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;mode|训练模式||false|integer(int32)||
|&emsp;&emsp;percent|训练进度||false|string||
|&emsp;&emsp;quType|题型（mode为3的时候需要）||false|integer(int32)||
|&emsp;&emsp;repoId|题库ID||false|string||
|&emsp;&emsp;rightCount|正确数量||false|integer(int32)||
|&emsp;&emsp;state|状态 0:未完成1:完成||false|integer(int32)||
|&emsp;&emsp;totalCount|总题目数量||false|integer(int32)||
|&emsp;&emsp;trainTime|最近训练时间||false|string(date-time)||
|&emsp;&emsp;userId|训练者||false|string||


### 批量新增或修改


**接口地址**:`/api/train/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "answerCount": 0,
    "id": "",
    "mode": 0,
    "percent": "",
    "quType": 0,
    "repoId": "",
    "rightCount": 0,
    "state": 0,
    "totalCount": 0,
    "trainTime": "",
    "userId": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Train|
|&emsp;&emsp;answerCount|回答数量||false|integer(int32)||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;mode|训练模式||false|integer(int32)||
|&emsp;&emsp;percent|训练进度||false|string||
|&emsp;&emsp;quType|题型（mode为3的时候需要）||false|integer(int32)||
|&emsp;&emsp;repoId|题库ID||false|string||
|&emsp;&emsp;rightCount|正确数量||false|integer(int32)||
|&emsp;&emsp;state|状态 0:未完成1:完成||false|integer(int32)||
|&emsp;&emsp;totalCount|总题目数量||false|integer(int32)||
|&emsp;&emsp;trainTime|最近训练时间||false|string(date-time)||
|&emsp;&emsp;userId|训练者||false|string||


### 根据Id删除


**接口地址**:`/api/train/deleteTrainById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据Id查询


**接口地址**:`/api/train/getTrainById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查询


**接口地址**:`/api/train/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|answerCount||query|false|integer(int32)||
|id||query|false|string||
|idFuzzy||query|false|string||
|mode||query|false|integer(int32)||
|orderBy||query|false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||
|percent||query|false|string||
|percentFuzzy||query|false|string||
|quType||query|false|integer(int32)||
|repoId||query|false|string||
|repoIdFuzzy||query|false|string||
|rightCount||query|false|integer(int32)||
|sequence||query|false|string||
|simplePage.countTotal||query|false|integer(int32)||
|simplePage.end||query|false|integer(int32)||
|simplePage.pageNo||query|false|integer(int32)||
|simplePage.pageSize||query|false|integer(int32)||
|simplePage.pageTotal||query|false|integer(int32)||
|simplePage.start||query|false|integer(int32)||
|state||query|false|integer(int32)||
|totalCount||query|false|integer(int32)||
|trainTime||query|false|string(date-time)||
|trainTimeEnd||query|false|string||
|trainTimeStart||query|false|string||
|userId||query|false|string||
|userIdFuzzy||query|false|string||


### 根据Id更新


**接口地址**:`/api/train/updateTrainById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|answerCount||query|false|integer(int32)||
|id|id|query|false|string||
|mode||query|false|integer(int32)||
|percent||query|false|string||
|quType||query|false|integer(int32)||
|repoId||query|false|string||
|rightCount||query|false|integer(int32)||
|state||query|false|integer(int32)||
|totalCount||query|false|integer(int32)||
|trainTime||query|false|string(date-time)||
|userId||query|false|string||


## 13. 训练记录


### 新增


**接口地址**:`/api/trainRecord/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|answer||query|false|string||
|answered||query|false|integer(int32)||
|answerId||query|false|string||
|id||query|false|string||
|isRight||query|false|integer(int32)||
|quId||query|false|string||
|sort||query|false|integer(int32)||
|trainId||query|false|string||


### 批量新增


**接口地址**:`/api/trainRecord/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "answer": "",
    "answerId": "",
    "answered": 0,
    "id": "",
    "isRight": 0,
    "quId": "",
    "sort": 0,
    "trainId": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|TrainRecord|
|&emsp;&emsp;answer|||false|string||
|&emsp;&emsp;answerId|||false|string||
|&emsp;&emsp;answered|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;isRight|||false|integer(int32)||
|&emsp;&emsp;quId|||false|string||
|&emsp;&emsp;sort|||false|integer(int32)||
|&emsp;&emsp;trainId|||false|string||


### 批量新增或修改


**接口地址**:`/api/trainRecord/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "answer": "",
    "answerId": "",
    "answered": 0,
    "id": "",
    "isRight": 0,
    "quId": "",
    "sort": 0,
    "trainId": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|TrainRecord|
|&emsp;&emsp;answer|||false|string||
|&emsp;&emsp;answerId|||false|string||
|&emsp;&emsp;answered|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;isRight|||false|integer(int32)||
|&emsp;&emsp;quId|||false|string||
|&emsp;&emsp;sort|||false|integer(int32)||
|&emsp;&emsp;trainId|||false|string||


### 根据Id删除


**接口地址**:`/api/trainRecord/deleteTrainRecordById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据Id查询


**接口地址**:`/api/trainRecord/getTrainRecordById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查询


**接口地址**:`/api/trainRecord/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "answer": "",
  "answerFuzzy": "",
  "answerId": "",
  "answerIdFuzzy": "",
  "answered": 0,
  "id": "",
  "idFuzzy": "",
  "isRight": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quId": "",
  "quIdFuzzy": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "sort": 0,
  "trainId": "",
  "trainIdFuzzy": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|TrainRecordQuery|TrainRecordQuery|
|&emsp;&emsp;answer|||false|string||
|&emsp;&emsp;answerFuzzy|||false|string||
|&emsp;&emsp;answerId|||false|string||
|&emsp;&emsp;answerIdFuzzy|||false|string||
|&emsp;&emsp;answered|||false|integer(int32)||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;isRight|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quId|||false|string||
|&emsp;&emsp;quIdFuzzy|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;sort|||false|integer(int32)||
|&emsp;&emsp;trainId|||false|string||
|&emsp;&emsp;trainIdFuzzy|||false|string||


### 根据Id更新


**接口地址**:`/api/trainRecord/updateTrainRecordById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|answer||query|false|string||
|answered||query|false|integer(int32)||
|answerId||query|false|string||
|id|id|query|false|string||
|isRight||query|false|integer(int32)||
|quId||query|false|string||
|sort||query|false|integer(int32)||
|trainId||query|false|string||



## 14. 试卷操作


### 新增


**接口地址**:`/api/paper/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptCode": "",
  "groupLists": [
    {
      "itemRand": 0,
      "perScore": 0,
      "quCount": 0,
      "quList": [
        {
          "analysis": "",
          "content": "",
          "createBy": "",
          "createTime": "",
          "id": "",
          "image": "",
          "knowledge": "",
          "level": 0,
          "quAnswerList": [
            {
              "analysis": "",
              "content": "",
              "id": "",
              "image": "",
              "isRight": 0,
              "quId": "",
              "tag": ""
            }
          ],
          "quType": 0,
          "repoId": "",
          "repoText": "",
          "score": 0,
          "sort": 0,
          "updateBy": "",
          "updateTime": ""
        }
      ],
      "quRand": 0,
      "quType": 0,
      "title": "",
      "totalScore": 0
    }
  ],
  "joinType": 0,
  "quCount": 0,
  "subjectId": "",
  "title": "",
  "totalCount": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|paperDTO|paperDTO|body|true|AddPaperDTO|AddPaperDTO|
|&emsp;&emsp;deptCode|所属部门（专业）编码||false|string||
|&emsp;&emsp;groupLists|大题列表||false|array|AddGroupListDTO|
|&emsp;&emsp;&emsp;&emsp;itemRand|选项是否乱序0:否1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;perScore|每个小题的分数||false|integer||
|&emsp;&emsp;&emsp;&emsp;quCount|题目总数||false|integer||
|&emsp;&emsp;&emsp;&emsp;quList|题目列表||false|array|QuAndAnswerVo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;analysis|题目分析||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;image|题目图片||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;knowledge|知识点||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;level|题目难度0:简单1:困难||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quAnswerList|问题选项列表||false|array|QuAnswer|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;tag|选项标签||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quType|题型||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;repoId|所属题库的ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;repoText|关联题库标题||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;score|分值（从其他表获取）||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort|排序（从其他表获取）||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;quRand|题目是否乱序0:否1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;quType|题型||false|integer||
|&emsp;&emsp;&emsp;&emsp;title|标题||false|string||
|&emsp;&emsp;&emsp;&emsp;totalScore|总分||false|integer||
|&emsp;&emsp;joinType|组卷方式0:题库抽取1:指定选题 其余预留||false|integer(int32)||
|&emsp;&emsp;quCount|题目总数||false|integer(int32)||
|&emsp;&emsp;subjectId|关联学科ID||false|string||
|&emsp;&emsp;title|试卷标题||false|string||
|&emsp;&emsp;totalCount|试卷总分||false|integer(int32)||


### 批量新增


**接口地址**:`/api/paper/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "id": "",
    "joinType": 0,
    "quCount": 0,
    "subjectId": "",
    "title": "",
    "totalCount": 0,
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Paper|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）编码||false|string||
|&emsp;&emsp;id|试卷ID||false|string||
|&emsp;&emsp;joinType|组卷方式0:题库抽取1:指定选题 其余预留||false|integer(int32)||
|&emsp;&emsp;quCount|题目总数||false|integer(int32)||
|&emsp;&emsp;subjectId|关联学科ID||false|string||
|&emsp;&emsp;title|试卷标题||false|string||
|&emsp;&emsp;totalCount|试卷总分||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 批量新增或修改


**接口地址**:`/api/paper/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "id": "",
    "joinType": 0,
    "quCount": 0,
    "subjectId": "",
    "title": "",
    "totalCount": 0,
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Paper|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）编码||false|string||
|&emsp;&emsp;id|试卷ID||false|string||
|&emsp;&emsp;joinType|组卷方式0:题库抽取1:指定选题 其余预留||false|integer(int32)||
|&emsp;&emsp;quCount|题目总数||false|integer(int32)||
|&emsp;&emsp;subjectId|关联学科ID||false|string||
|&emsp;&emsp;title|试卷标题||false|string||
|&emsp;&emsp;totalCount|试卷总分||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 根据Id删除


**接口地址**:`/api/paper/deletePaperById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据Id查询


**接口地址**:`/api/paper/getPaperById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据Id查询试卷详细信息


**接口地址**:`/api/paper/getPaperDetailById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据条件分页查询


**接口地址**:`/api/paper/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "id": "",
  "joinType": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quCount": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "subjectId": "",
  "title": "",
  "totalCount": 0,
  "updateBy": "",
  "updateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|PaperQuery|PaperQuery|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）编码||false|string||
|&emsp;&emsp;id|试卷ID||false|string||
|&emsp;&emsp;joinType|组卷方式0:题库抽取1:指定选题 其余预留||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quCount|题目总数||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;subjectId|关联学科ID||false|string||
|&emsp;&emsp;title|试卷标题||false|string||
|&emsp;&emsp;totalCount|试卷总分||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 获取试卷总数


**接口地址**:`/api/paper/paperCount`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "id": "",
  "joinType": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quCount": 0,
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "subjectId": "",
  "title": "",
  "totalCount": 0,
  "updateBy": "",
  "updateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|paperQuery|paperQuery|body|true|PaperQuery|PaperQuery|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|所属部门（专业）编码||false|string||
|&emsp;&emsp;id|试卷ID||false|string||
|&emsp;&emsp;joinType|组卷方式0:题库抽取1:指定选题 其余预留||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quCount|题目总数||false|integer(int32)||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;subjectId|关联学科ID||false|string||
|&emsp;&emsp;title|试卷标题||false|string||
|&emsp;&emsp;totalCount|试卷总分||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 根据Id更新


**接口地址**:`/api/paper/updatePaperById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "addPaperDTO": {
    "deptCode": "",
    "groupLists": [
      {
        "itemRand": 0,
        "perScore": 0,
        "quCount": 0,
        "quList": [
          {
            "analysis": "",
            "content": "",
            "createBy": "",
            "createTime": "",
            "id": "",
            "image": "",
            "knowledge": "",
            "level": 0,
            "quAnswerList": [
              {
                "analysis": "",
                "content": "",
                "id": "",
                "image": "",
                "isRight": 0,
                "quId": "",
                "tag": ""
              }
            ],
            "quType": 0,
            "repoId": "",
            "repoText": "",
            "score": 0,
            "sort": 0,
            "updateBy": "",
            "updateTime": ""
          }
        ],
        "quRand": 0,
        "quType": 0,
        "title": "",
        "totalScore": 0
      }
    ],
    "joinType": 0,
    "quCount": 0,
    "subjectId": "",
    "title": "",
    "totalCount": 0
  },
  "id": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bean|bean|body|true|UpdatePaperAndQuDTO|UpdatePaperAndQuDTO|
|&emsp;&emsp;addPaperDTO|添加试卷对象DTO||false|AddPaperDTO|AddPaperDTO|
|&emsp;&emsp;&emsp;&emsp;deptCode|所属部门（专业）编码||false|string||
|&emsp;&emsp;&emsp;&emsp;groupLists|大题列表||false|array|AddGroupListDTO|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;itemRand|选项是否乱序0:否1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;perScore|每个小题的分数||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quCount|题目总数||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quList|题目列表||false|array|QuAndAnswerVo|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;analysis|题目分析||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;image|题目图片||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;knowledge|知识点||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;level|题目难度0:简单1:困难||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quAnswerList|问题选项列表||false|array|QuAnswer|
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;tag|选项标签||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quType|题型||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;repoId|所属题库的ID||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;repoText|关联题库标题||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;score|分值（从其他表获取）||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;sort|排序（从其他表获取）||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quRand|题目是否乱序0:否1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;quType|题型||false|integer||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;title|标题||false|string||
|&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;totalScore|总分||false|integer||
|&emsp;&emsp;&emsp;&emsp;joinType|组卷方式0:题库抽取1:指定选题 其余预留||false|integer||
|&emsp;&emsp;&emsp;&emsp;quCount|题目总数||false|integer||
|&emsp;&emsp;&emsp;&emsp;subjectId|关联学科ID||false|string||
|&emsp;&emsp;&emsp;&emsp;title|试卷标题||false|string||
|&emsp;&emsp;&emsp;&emsp;totalCount|试卷总分||false|integer||
|&emsp;&emsp;id|id||false|string||


## 15. 选项答案操作


### 新增


**接口地址**:`/api/quAnswer/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "content": "",
  "id": "",
  "image": "",
  "isRight": 0,
  "quId": "",
  "tag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bean|bean|body|true|QuAnswer|QuAnswer|
|&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer(int32)||
|&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;tag|选项标签||false|string||


### 批量新增


**接口地址**:`/api/quAnswer/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "analysis": "",
    "content": "",
    "id": "",
    "image": "",
    "isRight": 0,
    "quId": "",
    "tag": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|QuAnswer|
|&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer(int32)||
|&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;tag|选项标签||false|string||


### 批量新增或修改


**接口地址**:`/api/quAnswer/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "analysis": "",
    "content": "",
    "id": "",
    "image": "",
    "isRight": 0,
    "quId": "",
    "tag": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|QuAnswer|
|&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer(int32)||
|&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;tag|选项标签||false|string||


### 根据Id删除


**接口地址**:`/api/quAnswer/deleteQuAnswerById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据Id查询


**接口地址**:`/api/quAnswer/getQuAnswerById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查询


**接口地址**:`/api/quAnswer/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "content": "",
  "id": "",
  "image": "",
  "isRight": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quId": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "tag": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|QuAnswerQuery|QuAnswerQuery|
|&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;tag|选项标签||false|string||


### 根据Id更新


**接口地址**:`/api/quAnswer/updateQuAnswerById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|analysis||query|false|string||
|content||query|false|string||
|id|id|query|false|string||
|image||query|false|string||
|isRight||query|false|integer(int32)||
|quId||query|false|string||
|tag||query|false|string||




## 16. 部门操作


### 新增


**接口地址**:`/api/department/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptLevel": 0,
  "deptName": "",
  "parentCode": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bean|bean|body|true|AddDepartmentDTO|AddDepartmentDTO|
|&emsp;&emsp;deptLevel|部门层级||false|integer(int32)||
|&emsp;&emsp;deptName|部门名称||false|string||
|&emsp;&emsp;parentCode|上层部门code||false|string||


### 批量新增


**接口地址**:`/api/department/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptLevel": 0,
    "deptName": "",
    "deptType": "",
    "id": "",
    "parentCode": "",
    "remark": "",
    "sort": 0,
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Department|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编码||false|string||
|&emsp;&emsp;deptLevel|部门层级||false|integer(int32)||
|&emsp;&emsp;deptName|部门名称||false|string||
|&emsp;&emsp;deptType|部门类型（预留）||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;parentCode|上层部门code||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;sort|排序||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 批量新增或修改


**接口地址**:`/api/department/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptLevel": 0,
    "deptName": "",
    "deptType": "",
    "id": "",
    "parentCode": "",
    "remark": "",
    "sort": 0,
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Department|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编码||false|string||
|&emsp;&emsp;deptLevel|部门层级||false|integer(int32)||
|&emsp;&emsp;deptName|部门名称||false|string||
|&emsp;&emsp;deptType|部门类型（预留）||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;parentCode|上层部门code||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;sort|排序||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 根据Id删除


**接口地址**:`/api/department/deleteDepartmentById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 获取部门数量


**接口地址**:`/api/department/deptCount`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "deptLevel": 0,
  "deptName": "",
  "deptType": "",
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "parentCode": "",
  "remark": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "sort": 0,
  "updateBy": "",
  "updateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|departmentQuery|departmentQuery|body|true|DepartmentQuery|DepartmentQuery|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编码||false|string||
|&emsp;&emsp;deptLevel|部门层级||false|integer(int32)||
|&emsp;&emsp;deptName|部门名称||false|string||
|&emsp;&emsp;deptType|部门类型（预留）||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;parentCode|上层部门code||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;sort|排序||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 根据Id返回所有的子部门Id（包括自己）


**接口地址**:`/api/department/getChildDeptById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|parentId|parentId|body|true|string||


### 根据Id查询


**接口地址**:`/api/department/getDepartmentById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 根据条件分页查询


**接口地址**:`/api/department/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "createBy": "",
  "createTime": "",
  "deptCode": "",
  "deptLevel": 0,
  "deptName": "",
  "deptType": "",
  "id": "",
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "parentCode": "",
  "remark": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "sort": 0,
  "updateBy": "",
  "updateTime": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|DepartmentQuery|DepartmentQuery|
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;deptCode|部门编码||false|string||
|&emsp;&emsp;deptLevel|部门层级||false|integer(int32)||
|&emsp;&emsp;deptName|部门名称||false|string||
|&emsp;&emsp;deptType|部门类型（预留）||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;parentCode|上层部门code||false|string||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;sort|排序||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 获取专业


**接口地址**:`/api/department/profession`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 部门排序


**接口地址**:`/api/department/sort`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptId": "",
  "sort": 0
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|sort|sort|body|true|UpdateDeptSortDTO|UpdateDeptSortDTO|
|&emsp;&emsp;deptId|部门ID||false|string||
|&emsp;&emsp;sort|排序方式（1：上移 0：下移）||false|integer(int32)||


### 获取树状列表


**接口地址**:`/api/department/treeList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 根据Id更新


**接口地址**:`/api/department/updateDepartmentById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "department": {
    "createBy": "",
    "createTime": "",
    "deptCode": "",
    "deptLevel": 0,
    "deptName": "",
    "deptType": "",
    "id": "",
    "parentCode": "",
    "remark": "",
    "sort": 0,
    "updateBy": "",
    "updateTime": ""
  },
  "id": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|updateDeptDTO|updateDeptDTO|body|true|UpdateDeptDTO|UpdateDeptDTO|
|&emsp;&emsp;department|部门对象||false|Department|Department|
|&emsp;&emsp;&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;&emsp;&emsp;createTime|创建时间||false|string||
|&emsp;&emsp;&emsp;&emsp;deptCode|部门编码||false|string||
|&emsp;&emsp;&emsp;&emsp;deptLevel|部门层级||false|integer||
|&emsp;&emsp;&emsp;&emsp;deptName|部门名称||false|string||
|&emsp;&emsp;&emsp;&emsp;deptType|部门类型（预留）||false|string||
|&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;parentCode|上层部门code||false|string||
|&emsp;&emsp;&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;&emsp;&emsp;sort|排序||false|integer||
|&emsp;&emsp;&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;&emsp;&emsp;updateTime|更新时间||false|string||
|&emsp;&emsp;id|部门id||false|string||


## 17. 错题本


### 新增


**接口地址**:`/api/book/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|false|string||
|knContent||query|false|string||
|quContent||query|false|string||
|quId||query|false|string||
|quType||query|false|integer(int32)||
|subjectId||query|false|string||
|userId||query|false|string||
|wrongCount||query|false|integer(int32)||


### 批量新增


**接口地址**:`/api/book/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": "",
    "knContent": "",
    "quContent": "",
    "quId": "",
    "quType": 0,
    "subjectId": "",
    "userId": "",
    "wrongCount": 0
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Book|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;knContent|||false|string||
|&emsp;&emsp;quContent|||false|string||
|&emsp;&emsp;quId|||false|string||
|&emsp;&emsp;quType|||false|integer(int32)||
|&emsp;&emsp;subjectId|||false|string||
|&emsp;&emsp;userId|||false|string||
|&emsp;&emsp;wrongCount|||false|integer(int32)||


### 批量新增或修改


**接口地址**:`/api/book/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "id": "",
    "knContent": "",
    "quContent": "",
    "quId": "",
    "quType": 0,
    "subjectId": "",
    "userId": "",
    "wrongCount": 0
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Book|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;knContent|||false|string||
|&emsp;&emsp;quContent|||false|string||
|&emsp;&emsp;quId|||false|string||
|&emsp;&emsp;quType|||false|integer(int32)||
|&emsp;&emsp;subjectId|||false|string||
|&emsp;&emsp;userId|||false|string||
|&emsp;&emsp;wrongCount|||false|integer(int32)||


### 根据Id删除


**接口地址**:`/api/book/deleteBookById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据Id查询


**接口地址**:`/api/book/getBookById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||


### 根据条件分页查


**接口地址**:`/api/book/loadDataList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id||query|false|string||
|idFuzzy||query|false|string||
|knContent||query|false|string||
|knContentFuzzy||query|false|string||
|orderBy||query|false|string||
|pageNo||query|false|integer(int32)||
|pageSize||query|false|integer(int32)||
|quContent||query|false|string||
|quContentFuzzy||query|false|string||
|quId||query|false|string||
|quIdFuzzy||query|false|string||
|quType||query|false|integer(int32)||
|sequence||query|false|string||
|simplePage.countTotal||query|false|integer(int32)||
|simplePage.end||query|false|integer(int32)||
|simplePage.pageNo||query|false|integer(int32)||
|simplePage.pageSize||query|false|integer(int32)||
|simplePage.pageTotal||query|false|integer(int32)||
|simplePage.start||query|false|integer(int32)||
|subjectId||query|false|string||
|subjectIdFuzzy||query|false|string||
|userId||query|false|string||
|userIdFuzzy||query|false|string||
|wrongCount||query|false|integer(int32)||


### 根据Id更新


**接口地址**:`/api/book/updateBookById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|query|false|string||
|knContent||query|false|string||
|quContent||query|false|string||
|quId||query|false|string||
|quType||query|false|integer(int32)||
|subjectId||query|false|string||
|userId||query|false|string||
|wrongCount||query|false|integer(int32)||


## 18. 题库操作


### 添加题库


**接口地址**:`/api/repo/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "deptCode": "",
  "isExam": 0,
  "isTrain": 0,
  "remark": "",
  "subjectId": "",
  "title": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|repoDTO|repoDTO|body|true|AddRepoDTO|AddRepoDTO|
|&emsp;&emsp;deptCode|部门编码（专业）||false|string||
|&emsp;&emsp;isExam|是否用于考试||false|integer(int32)||
|&emsp;&emsp;isTrain|是否用于训练||false|integer(int32)||
|&emsp;&emsp;remark|备注||false|string||
|&emsp;&emsp;subjectId|学科ID||false|string||
|&emsp;&emsp;title|题库标题||false|string||


## 19. 题目操作


### 新增题目和选项


**接口地址**:`/api/qu/add`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "content": "",
  "image": "",
  "knowledge": "",
  "level": 0,
  "quAnswerList": [
    {
      "analysis": "",
      "content": "",
      "id": "",
      "image": "",
      "isRight": 0,
      "quId": "",
      "tag": ""
    }
  ],
  "quType": 0,
  "repoId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bean|bean|body|true|AddQuAndAnswerDTO|AddQuAndAnswerDTO|
|&emsp;&emsp;analysis|题目分析||false|string||
|&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;image|题目图片||false|string||
|&emsp;&emsp;knowledge|知识点||false|string||
|&emsp;&emsp;level|题目难度0:简单1:困难||false|integer(int32)||
|&emsp;&emsp;quAnswerList|选项列表||false|array|QuAnswer|
|&emsp;&emsp;&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;&emsp;&emsp;tag|选项标签||false|string||
|&emsp;&emsp;quType|题型||false|integer(int32)||
|&emsp;&emsp;repoId|所属题库的ID||false|string||


### 批量新增


**接口地址**:`/api/qu/addBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "analysis": "",
    "content": "",
    "createBy": "",
    "createTime": "",
    "id": "",
    "image": "",
    "knowledge": "",
    "level": 0,
    "quType": 0,
    "repoId": "",
    "repoText": "",
    "score": 0,
    "sort": 0,
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Qu|
|&emsp;&emsp;analysis|题目分析||false|string||
|&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|题目图片||false|string||
|&emsp;&emsp;knowledge|知识点||false|string||
|&emsp;&emsp;level|题目难度0:简单1:困难||false|integer(int32)||
|&emsp;&emsp;quType|题型||false|integer(int32)||
|&emsp;&emsp;repoId|所属题库的ID||false|string||
|&emsp;&emsp;repoText|关联题库标题||false|string||
|&emsp;&emsp;score|分值（从其他表获取）||false|integer(int32)||
|&emsp;&emsp;sort|排序（从其他表获取）||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 批量新增或修改


**接口地址**:`/api/qu/addOrUpdateBatch`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
[
  {
    "analysis": "",
    "content": "",
    "createBy": "",
    "createTime": "",
    "id": "",
    "image": "",
    "knowledge": "",
    "level": 0,
    "quType": 0,
    "repoId": "",
    "repoText": "",
    "score": 0,
    "sort": 0,
    "updateBy": "",
    "updateTime": ""
  }
]
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|listBean|listBean|body|true|array|Qu|
|&emsp;&emsp;analysis|题目分析||false|string||
|&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;createBy|创建者||false|string||
|&emsp;&emsp;createTime|创建时间||false|string(date-time)||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|题目图片||false|string||
|&emsp;&emsp;knowledge|知识点||false|string||
|&emsp;&emsp;level|题目难度0:简单1:困难||false|integer(int32)||
|&emsp;&emsp;quType|题型||false|integer(int32)||
|&emsp;&emsp;repoId|所属题库的ID||false|string||
|&emsp;&emsp;repoText|关联题库标题||false|string||
|&emsp;&emsp;score|分值（从其他表获取）||false|integer(int32)||
|&emsp;&emsp;sort|排序（从其他表获取）||false|integer(int32)||
|&emsp;&emsp;updateBy|更新者||false|string||
|&emsp;&emsp;updateTime|更新时间||false|string(date-time)||


### 根据Id删除


**接口地址**:`/api/qu/deleteQuById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 导出


**接口地址**:`/api/qu/export`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


暂无


### 根据Id查询题目和对应选项的信息


**接口地址**:`/api/qu/getQuById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|id|id|body|true|string||


### 批量导入


**接口地址**:`/api/qu/importQu`


**请求方式**:`POST`


**请求数据类型**:`multipart/form-data`





**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|repoId||formData|false|string||
|file||formData|false|file||


### 过滤指定题目之后的题目和选项列表


**接口地址**:`/api/qu/loadExcludeQuAnAnswerList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "analysisFuzzy": "",
  "content": "",
  "contentFuzzy": "",
  "createBy": "",
  "createByFuzzy": "",
  "createTime": "",
  "createTimeEnd": "",
  "createTimeStart": "",
  "excludes": [],
  "id": "",
  "idFuzzy": "",
  "image": "",
  "imageFuzzy": "",
  "knowledge": "",
  "knowledgeFuzzy": "",
  "level": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quType": 0,
  "repoId": "",
  "repoIdFuzzy": "",
  "repoText": "",
  "repoTextFuzzy": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "updateBy": "",
  "updateByFuzzy": "",
  "updateTime": "",
  "updateTimeEnd": "",
  "updateTimeStart": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|QuExcludeQuery|QuExcludeQuery|
|&emsp;&emsp;analysis|||false|string||
|&emsp;&emsp;analysisFuzzy|||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;contentFuzzy|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createByFuzzy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;createTimeEnd|||false|string||
|&emsp;&emsp;createTimeStart|||false|string||
|&emsp;&emsp;excludes|需要排除的题目Id||false|array|string|
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;image|||false|string||
|&emsp;&emsp;imageFuzzy|||false|string||
|&emsp;&emsp;knowledge|||false|string||
|&emsp;&emsp;knowledgeFuzzy|||false|string||
|&emsp;&emsp;level|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quType|||false|integer(int32)||
|&emsp;&emsp;repoId|||false|string||
|&emsp;&emsp;repoIdFuzzy|||false|string||
|&emsp;&emsp;repoText|||false|string||
|&emsp;&emsp;repoTextFuzzy|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateByFuzzy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;updateTimeEnd|||false|string||
|&emsp;&emsp;updateTimeStart|||false|string||


### 获取题目+选项列表


**接口地址**:`/api/qu/loadQuAndAnswerList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "analysisFuzzy": "",
  "content": "",
  "contentFuzzy": "",
  "createBy": "",
  "createByFuzzy": "",
  "createTime": "",
  "createTimeEnd": "",
  "createTimeStart": "",
  "id": "",
  "idFuzzy": "",
  "image": "",
  "imageFuzzy": "",
  "knowledge": "",
  "knowledgeFuzzy": "",
  "level": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quType": 0,
  "repoId": "",
  "repoIdFuzzy": "",
  "repoText": "",
  "repoTextFuzzy": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "updateBy": "",
  "updateByFuzzy": "",
  "updateTime": "",
  "updateTimeEnd": "",
  "updateTimeStart": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|QuQuery|QuQuery|
|&emsp;&emsp;analysis|||false|string||
|&emsp;&emsp;analysisFuzzy|||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;contentFuzzy|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createByFuzzy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;createTimeEnd|||false|string||
|&emsp;&emsp;createTimeStart|||false|string||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;image|||false|string||
|&emsp;&emsp;imageFuzzy|||false|string||
|&emsp;&emsp;knowledge|||false|string||
|&emsp;&emsp;knowledgeFuzzy|||false|string||
|&emsp;&emsp;level|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quType|||false|integer(int32)||
|&emsp;&emsp;repoId|||false|string||
|&emsp;&emsp;repoIdFuzzy|||false|string||
|&emsp;&emsp;repoText|||false|string||
|&emsp;&emsp;repoTextFuzzy|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateByFuzzy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;updateTimeEnd|||false|string||
|&emsp;&emsp;updateTimeStart|||false|string||


### 根据条件分页查询


**接口地址**:`/api/qu/loadQuList`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "analysisFuzzy": "",
  "content": "",
  "contentFuzzy": "",
  "createBy": "",
  "createByFuzzy": "",
  "createTime": "",
  "createTimeEnd": "",
  "createTimeStart": "",
  "id": "",
  "idFuzzy": "",
  "image": "",
  "imageFuzzy": "",
  "knowledge": "",
  "knowledgeFuzzy": "",
  "level": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quType": 0,
  "repoId": "",
  "repoIdFuzzy": "",
  "repoText": "",
  "repoTextFuzzy": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "updateBy": "",
  "updateByFuzzy": "",
  "updateTime": "",
  "updateTimeEnd": "",
  "updateTimeStart": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|QuQuery|QuQuery|
|&emsp;&emsp;analysis|||false|string||
|&emsp;&emsp;analysisFuzzy|||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;contentFuzzy|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createByFuzzy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;createTimeEnd|||false|string||
|&emsp;&emsp;createTimeStart|||false|string||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;image|||false|string||
|&emsp;&emsp;imageFuzzy|||false|string||
|&emsp;&emsp;knowledge|||false|string||
|&emsp;&emsp;knowledgeFuzzy|||false|string||
|&emsp;&emsp;level|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quType|||false|integer(int32)||
|&emsp;&emsp;repoId|||false|string||
|&emsp;&emsp;repoIdFuzzy|||false|string||
|&emsp;&emsp;repoText|||false|string||
|&emsp;&emsp;repoTextFuzzy|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateByFuzzy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;updateTimeEnd|||false|string||
|&emsp;&emsp;updateTimeStart|||false|string||


### 获取题目数量


**接口地址**:`/api/qu/quCount`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "analysisFuzzy": "",
  "content": "",
  "contentFuzzy": "",
  "createBy": "",
  "createByFuzzy": "",
  "createTime": "",
  "createTimeEnd": "",
  "createTimeStart": "",
  "id": "",
  "idFuzzy": "",
  "image": "",
  "imageFuzzy": "",
  "knowledge": "",
  "knowledgeFuzzy": "",
  "level": 0,
  "orderBy": "",
  "pageNo": 0,
  "pageSize": 0,
  "quType": 0,
  "repoId": "",
  "repoIdFuzzy": "",
  "repoText": "",
  "repoTextFuzzy": "",
  "sequence": "",
  "simplePage": {
    "countTotal": 0,
    "end": 0,
    "pageNo": 0,
    "pageSize": 0,
    "pageTotal": 0,
    "start": 0
  },
  "updateBy": "",
  "updateByFuzzy": "",
  "updateTime": "",
  "updateTimeEnd": "",
  "updateTimeStart": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|query|query|body|true|QuQuery|QuQuery|
|&emsp;&emsp;analysis|||false|string||
|&emsp;&emsp;analysisFuzzy|||false|string||
|&emsp;&emsp;content|||false|string||
|&emsp;&emsp;contentFuzzy|||false|string||
|&emsp;&emsp;createBy|||false|string||
|&emsp;&emsp;createByFuzzy|||false|string||
|&emsp;&emsp;createTime|||false|string(date-time)||
|&emsp;&emsp;createTimeEnd|||false|string||
|&emsp;&emsp;createTimeStart|||false|string||
|&emsp;&emsp;id|||false|string||
|&emsp;&emsp;idFuzzy|||false|string||
|&emsp;&emsp;image|||false|string||
|&emsp;&emsp;imageFuzzy|||false|string||
|&emsp;&emsp;knowledge|||false|string||
|&emsp;&emsp;knowledgeFuzzy|||false|string||
|&emsp;&emsp;level|||false|integer(int32)||
|&emsp;&emsp;orderBy|页面排序||false|string||
|&emsp;&emsp;pageNo|页码||false|integer(int32)||
|&emsp;&emsp;pageSize|页面大小||false|integer(int32)||
|&emsp;&emsp;quType|||false|integer(int32)||
|&emsp;&emsp;repoId|||false|string||
|&emsp;&emsp;repoIdFuzzy|||false|string||
|&emsp;&emsp;repoText|||false|string||
|&emsp;&emsp;repoTextFuzzy|||false|string||
|&emsp;&emsp;sequence|顺序||false|string||
|&emsp;&emsp;simplePage|简单分页对象||false|SimplePage|SimplePage|
|&emsp;&emsp;&emsp;&emsp;countTotal|总数据量||false|integer||
|&emsp;&emsp;&emsp;&emsp;end|结束页||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageNo|页码||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageSize|页码大小||false|integer||
|&emsp;&emsp;&emsp;&emsp;pageTotal|总页数||false|integer||
|&emsp;&emsp;&emsp;&emsp;start|起始页||false|integer||
|&emsp;&emsp;updateBy|||false|string||
|&emsp;&emsp;updateByFuzzy|||false|string||
|&emsp;&emsp;updateTime|||false|string(date-time)||
|&emsp;&emsp;updateTimeEnd|||false|string||
|&emsp;&emsp;updateTimeStart|||false|string||


### 随机抽题题目


**接口地址**:`/api/qu/randomSelectQu`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "excludes": [],
  "levels": [
    {
      "level": 0,
      "num": 0,
      "quCount": 0
    }
  ],
  "quType": 0,
  "repoId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|selectQuDTO|selectQuDTO|body|true|RandomSelectQuDTO|RandomSelectQuDTO|
|&emsp;&emsp;excludes|题目排除列表||false|array|string|
|&emsp;&emsp;levels|分类列表||false|array|ClassfiySelect|
|&emsp;&emsp;&emsp;&emsp;level|题目难度||false|integer||
|&emsp;&emsp;&emsp;&emsp;num|选取的题目数量||false|integer||
|&emsp;&emsp;&emsp;&emsp;quCount|题目数量||false|integer||
|&emsp;&emsp;quType|题型||false|integer(int32)||
|&emsp;&emsp;repoId|题库ID||false|string||


### 根据题目Id更新题目和关联选项


**接口地址**:`/api/qu/updateQuById`


**请求方式**:`POST`


**请求数据类型**:`application/json`





**请求示例**:


```javascript
{
  "analysis": "",
  "content": "",
  "id": "",
  "image": "",
  "knowledge": "",
  "level": 0,
  "quAnswerList": [
    {
      "analysis": "",
      "content": "",
      "id": "",
      "image": "",
      "isRight": 0,
      "quId": "",
      "tag": ""
    }
  ],
  "quType": 0,
  "repoId": ""
}
```


**请求参数**:


| 参数名称 | 参数说明 | 请求类型    | 是否必须 | 数据类型 | schema |
| -------- | -------- | ----- | -------- | -------- | ------ |
|bean|bean|body|true|UpdateQuAndAnswerDTO|UpdateQuAndAnswerDTO|
|&emsp;&emsp;analysis|题目分析||false|string||
|&emsp;&emsp;content|题目内容||false|string||
|&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;image|题目图片||false|string||
|&emsp;&emsp;knowledge|知识点||false|string||
|&emsp;&emsp;level|题目难度0:简单1:困难||false|integer(int32)||
|&emsp;&emsp;quAnswerList|题目答案列表||false|array|QuAnswer|
|&emsp;&emsp;&emsp;&emsp;analysis|选项分析||false|string||
|&emsp;&emsp;&emsp;&emsp;content|选项内容||false|string||
|&emsp;&emsp;&emsp;&emsp;id|ID||false|string||
|&emsp;&emsp;&emsp;&emsp;image|选项图片||false|string||
|&emsp;&emsp;&emsp;&emsp;isRight|是否是答案0:不是1:是||false|integer||
|&emsp;&emsp;&emsp;&emsp;quId|题目ID||false|string||
|&emsp;&emsp;&emsp;&emsp;tag|选项标签||false|string||
|&emsp;&emsp;quType|题型||false|integer(int32)||
|&emsp;&emsp;repoId|所属题库的ID||false|string||






