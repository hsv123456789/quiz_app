const data = [
	{
		question: 'Which of the following data structures is used to implement a priority queue?',
		options: ['A) Heap', 'B) Stack', 'C) Queue', 'D) Array'],
		answer: 'A) Heap'
	},
	{
		question: 'Which of the following algorithms is used to sort a linked list?',
		options: ['A) Merge sort', 'B) Quick sort', 'C) Insertion sort', 'D) Selection sort'],
		answer: 'A) Merge sort'
	},
	{
		question: 'Which of the following data structures is used to implement a hash table?',
		options: ['A) Array', 'B) Linked list', 'C) Tree', 'D) Graph'],
		answer: 'A) Array'
	},
	{
		question:
			'Which of the following algorithms is used to find the shortest path in a weighted graph?',
		options: [
			'A) Breadth-first search',
			'B) Depth-first search',
			"C) Dijkstra's algorithm",
			"D) Kruskal's algorithm"
		],
		answer: "C) Dijkstra's algorithm"
	},
	{
		question: 'Which of the following data structures is used to implement a trie?',
		options: ['A) Array', 'B) Linked list', 'C) Tree', 'D) Graph'],
		answer: 'C) Tree'
	},
	{
		question: 'Which of the following is a self-balancing binary search tree?',
		options: ['A) AVL Tree', 'B) Binary Heap', 'C) Red-Black Tree', 'D) All of the above'],
		answer: 'A) AVL Tree'
	},
	{
		question:
			'Which of the following algorithms is used to find the shortest path in a directed acyclic graph?',
		options: [
			'A) Depth-first search',
			'B) Breadth-first search',
			'C) Dijkstra’s algorithm',
			'D) Topological sort'
		],
		answer: 'D) Topological sort'
	},
	{
		question:
			'Which of the following algorithms is used to find the minimum spanning tree of a graph?',
		options: [
			'A) Prim’s algorithm',
			'B) Kruskal’s algorithm',
			'C) Dijkstra’s algorithm',
			'D) Bellman-Ford algorithm'
		],
		answer: 'B) Kruskal’s algorithm'
	},
	{
		question:
			'Which of the following algorithms is used to find the longest common subsequence between two strings?',
		options: [
			'A) Dijkstra’s algorithm',
			'B) Bellman-Ford algorithm',
			'C) Floyd-Warshall algorithm',
			'D) Dynamic programming'
		],
		answer: 'D) Dynamic programming'
	},
	{
		question:
			'Which of the following algorithms is used to compute the greatest common divisor (GCD) of two numbers?',
		options: [
			'A) Euclidean algorithm',
			'B) Sieve of Eratosthenes',
			'C) Fibonacci sequence',
			'D) Merge sort'
		],
		answer: 'A) Euclidean algorithm'
	},
	{
		question: 'Which of the following algorithms is used to find the maximum subarray sum?',
		options: [
			'A) Brute-force algorithm',
			'B) Quick sort',
			'C) Merge sort',
			'D) Divide-and-conquer algorithm'
		],
		answer: 'D) Divide-and-conquer algorithm'
	},
	{
		question:
			'Which of the following algorithms is used to find the optimal solution for the activity selection problem?',
		options: [
			'A) Brute-force algorithm',
			'B) Greedy algorithm',
			'C) Dynamic programming',
			'D) Divide and conquer algorithm'
		],
		answer: 'B) Greedy algorithm'
	},
	{
		question:
			'Which of the following algorithms is used to find the optimal solution by incrementally building the search tree and pruning subtrees based on their bound?',
		options: [
			'A) Brute-force algorithm',
			'B) Greedy algorithm',
			'C) Backtracking algorithm',
			'D) Branch and bound algorithm'
		],
		answer: 'D) Branch and bound algorithm'
	},
	{
		question:
			'Which of the following describes a problem that is at least as hard as all other NP problems?',
		options: ['A) NP-complete', 'B) NP-hard', 'C) P', 'D) BPP'],
		answer: 'B) NP-hard'
	},
	{
		question: 'What is the time complexity of the merge sort algorithm?',
		options: ['A) O(n)', 'B) O(nlogn)', 'C) O(n^2)', 'D) O(logn)'],
		answer: 'B) O(nlogn)'
	},
	{
		question: 'Which of the following algorithms uses the divide and conquer strategy?',
		options: ['A) Bubble sort', 'B) Quick sort', 'C) Insertion sort', 'D) Selection sort'],
		answer: 'B) Quick sort'
	},
	{
		question: 'Which of the following data structures is used to implement a queue?',
		options: ['A) Stack', 'B) Linked list', 'C) Binary search tree', 'D) Heap'],
		answer: 'B) Linked list'
	},
	{
		question: 'Which of the following algorithms is used to find the shortest path in a graph?',
		options: [
			'A) Depth-first search',
			'B) Breadth-first search',
			"C) Dijkstra's algorithm",
			"D) Kruskal's algorithm"
		],
		answer: "C) Dijkstra's algorithm"
	},
	{
		question: 'Which of the following describes a problem that can be solved in polynomial time?',
		options: ['A) NP-hard', 'B) NP-complete', 'C) P', 'D) None of the above'],
		answer: 'C) P'
	},
	{
		question:
			'What is the worst-case time complexity of quicksort when the input array is already sorted in ascending order?',
		options: ['A) O(n)', 'B) O(n log n)', 'C) O(n^2)', 'D) O(log n)'],
		answer: 'C) O(n^2)'
	},
	{
		question: 'What is the worst-case time complexity of binary search?',
		options: ['A) O(1)', 'B) O(log n)', 'C) O(n)', 'D) O(n^2)'],
		answer: 'B) O(log n)'
	},
	{
		question: 'Which of the following is an example of a divide-and-conquer algorithm?',
		options: ['A) Bubble sort', 'B) Insertion sort', 'C) Quick sort', 'D) Selection sort'],
		answer: 'C) Quick sort'
	},
	{
		question:
			'Which of the following algorithms can be used to find the shortest path in a graph with negative edge weights?',
		options: [
			"A) Dijkstra's algorithm",
			'B) Bellman-Ford algorithm',
			"C) Kruskal's algorithm",
			"D) Prim's algorithm"
		],
		answer: 'B) Bellman-Ford algorithm'
	},
	{
		question: 'Which of the following is an example of an NP-complete problem?',
		options: [
			'A) Shortest path',
			'B) Minimum spanning tree',
			'C) Traveling salesman problem',
			'D) Depth-first search'
		],
		answer: 'C) Traveling salesman problem'
	},
	{
		question: 'Which of the following is an example of an NP-complete problem?',
		options: [
			'A) T(n) = T(n-1) + n',
			'B) T(n) = 2T(n/2) + n',
			'C) T(n) = T(n/2) + n',
			'D) T(n) = T(n-1) + 2n'
		],
		answer: 'B) T(n) = 2T(n/2) + n'
	},
	{
		question:
			'What is the value of f(5) in the following recurrence relation?: f(n) = f(n-1) + f(n-2), f(0) = 0, f(1) = 1',
		options: ['A) 3', 'B) 5', 'C) 8', 'D) 13'],
		answer: 'C) 8'
	},
	{
		question: `What is the time complexity of the following algorithm to calculate the nth Fibonacci number?
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}`,
		options: ['A) O(n)', 'B) O(log n)', 'C) O(n log n)', 'D) Exponential'],
		answer: 'D) Exponential'
	},
	{
		question: `In the fake coin problem, suppose you have a set of 10 coins and you know that one of them is fake, but you don't know if it is heavier or lighter than the other coins. What is the minimum number of weighings required to identify the fake coin?`,
		options: ['A) 2', 'B) 3', 'C) 4', 'D) 5'],
		answer: 'B) 3'
	},
	{
		question:
			'In the interpolation search algorithm, the position of the target value is calculated using which formula?',
		options: [
			'A) pos = (value - arr[0]) / (arr[n-1] - arr[0]) * (n - 1)',
			'B) pos = (value - arr[0]) / (arr[n-1] - arr[0]) * n',
			'C) pos = (value - arr[0]) * (n - 1) / (arr[n-1] - arr[0])',
			'D) pos = (value - arr[0]) * n / (arr[n-1] - arr[0])'
		],
		answer: 'C) pos = (value - arr[0]) * (n - 1) / (arr[n-1] - arr[0])'
	},
	{
		question:
			'What is the maximum height difference allowed in an AVL tree after insertion or deletion of a node?',
		options: ['A) 1', 'B) 2', 'C) 3', 'D) 4'],
		answer: 'B) 2'
	}
];
export default data;
