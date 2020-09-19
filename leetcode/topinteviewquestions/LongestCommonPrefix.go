package topinteviewquestions

import "strings"

func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	prefix := strs[0]
	for i := 0; i < len(strs); i++ {
		prefix = getCommonPrefix(prefix, strs[i])
	}
	return prefix
}

func getCommonPrefix(str1 string, str2 string) string {
	var result []string
	i := 0
	j := 0
	for i < len(str1) && j < len(str2) {
		if string(str1[i]) != string(str2[j]) {
			break
		} else {
			result = append(result, string(str1[i]))
		}
		i++
		j++
	}
	return strings.Join(result, "")
}
