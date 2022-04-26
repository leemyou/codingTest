def solution(id_list, report, k):
    answer = [0] * len(id_list)             # id_list의 크기만큼 answer리스트 생성
    
    reports = {x : 0 for x in id_list}      # 

    for r in set(report):                   # report의 중복을 제거하고 반복
        reports[r.split()[1]] += 1          # report배열의 원소를 하나씩 추가
                                            # report를 띄어쓰기기준으로 잘라서 -> 신고된id가 추출
    for r in set(report):
        if reports[r.split()[1]] >= k:      # 만약 report의 원소값이 k보다 크다면
            answer[id_list.index(r.split()[0])] += 1    # answer인덱스의 원소값에 1 추가

    return answer