data = {"dict1":{"id":0,"name": "A"},
        "dict2":{"id":1,"name": "B"},
        "dict3":{"id":2, "name": "C"}}


for i in data.keys():
    for j in data[i]:
        print(data[i][j])

