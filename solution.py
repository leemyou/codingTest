def solution(id_list, report, k):

    # 1. report의 중복 제거
    report = set(report)

    # 2. report분리
    dic = {i : [] for i in id_list}
    a = []
    for i in report:
        신고한id = i.split()[0] 
        신고된id = i.split()[1]
        a.append(신고된id)

        dic[신고한id].append(신고된id) 

    ban = []
    for j in id_list :
        if k <= a.count(j) :
            ban.append(j)   # 밴 된 친구들의 리스트가 출력

    answer = [0]*len(id_list)

    for i in id_list :
        for j in ban :
            if j in dic[i] :
                answer[id_list.index(i)] += 1      
    return answer