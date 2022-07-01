# include <iostream>
using namespace std;
# include <sys/types.h>
# include <unistd.h>

int main(void) {
	pid_t mypid;
	// uid_t myuid;

	for (int i=0; i<3; i++){
		cout << "i am proses" << mypid << endl;
		sleep(1);
	}

	return 0;
}