---
layout: page
title: Loggers
permalink: /loggers
---

I have a bunch of loggers for different languages. They support:

- Creating new loggers
- Writing to stderr
- Setting the main loglevel
- Writing to files
- Setting the file loglevel

This is the full list:

- [Guosh (C/++)](https://github.com/handicraftsman/guosh/)
- [Guosh (Go)](https://github.com/handicraftsman/guosh.go/)
- [Positron (Python)](https://github.com/handicraftsman/positron/)
- [Gluon (Crystal, no file support)](https://github.com/handicraftsman/gluon/)

## Samples:

### Guosh (C++)

{% highlight cpp %}
#include <guosh.hpp>

int main() {
  Guosh::Logger::main_level = Guosh::LogLevel::DEBUG;
  Guosh::Logger log;
  log.enable_file_logging("./", "test-c++");

  log.debug("debug");
  log.io("io");
  log.info("info");
  log.warning("warning");
  log.error("error");
  log.important("important");
  log.critical("critical");
}
{% endhighlight %}

### Guosh (C)

{% highlight c %}
#include <guosh.h>

int main() {
  guosh_set_main_level(GuoshLogLevel_DEBUG);
  GuoshLogger* log = guosh_logger_new("log", GuoshLogLevel_INFO);
  guosh_logger_enable_file_logging(log, "./", "test-c");

  guosh_logger_debug(log, "debug");
  guosh_logger_io(log, "io");
  guosh_logger_info(log, "info");
  guosh_logger_warning(log, "warning");
  guosh_logger_error(log, "error");
  guosh_logger_important(log, "important");
  guosh_logger_critical(log, "critical");
  
  guosh_logger_destroy(log);
  return 0;
}
{% endhighlight %}

### Guosh (Go)

{% highlight go %}
package main

import "github.com/handicraftsman/guosh.go"

func main() {
  guosh.SetMainLevel(guosh.LogLevel_DEBUG)
  log := guosh.NewLogger("log", guosh.LogLevel_INFO)
  log.EnableFileLogging("./", "test-go")

  log.Debug("debug")
  log.IO("io")
  log.Info("info")
  log.Warning("warning")
  log.Error("error")
  log.Important("important")
  log.Critical("critical")
}
{% endhighlight %}

### Positron (Python)

{% highlight python %}
import positron

positron.main_level = positron.LogLevel.DEBUG
log = positron.Logger('log', positron.LogLevel.IMPORTANT)
log.enable_file_logging()

log.debug('debug')
log.io('io')
log.info('info')
log.warning('warning')
log.error('error')
log.important('important')
log.critical('critical')

log.iochars = 'MSG'
log.io('msg')
{% endhighlight %}

### Gluon (Crystal)

{% highlight ruby %}
require "gluon"

Gluon::Logger.main_log_level = Gluon::LogLevel::DEBUG
l = Gluon::Logger.new(Gluon::LogLevel::DEBUG)

l.write("Hello!")
l.debug("debug")
l.info("info")
l.warning("warning")
l.error("error")
l.critical("critical")
{% endhighlight %}
