Created a new widget with a setup identical to the original widget.

Created a simple widget that has search managed by Redux and Saga.

I used a fork to run the saga once when the root saga starts (i.e., when the widget is mounted). In this case, I'm passing an empty string as the action payload, but we can adjust this if needed.
