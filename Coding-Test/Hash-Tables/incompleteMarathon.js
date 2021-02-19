function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);

function solution(participant, completion) {
  let key = new Map();

  for (let i = 0; i < completion.length; i++) {
    if (!key.has(completion[i])) {
      key.set(completion[i], 1);
    } else {
      key.set(completion[i], key.get(completion[i]) + 1);
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (!key.has(participant[i])) {
      return participant[i];
    } else {
      let count = key.get(participant[i]);
      if (count === 0) {
        return participant[i];
      } else key.set(participant[i], count - 1);
    }
  }
}
