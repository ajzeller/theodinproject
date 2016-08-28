class Timer
  attr_accessor:seconds

#if value is given for seconds, set @seconds variable to it, otherwise, initialize to 0
  def initialize
    @seconds ? @seconds = seconds: @seconds = 0
  end

  def time_string
  Time.at(@seconds).utc.strftime("%H:%M:%S") #convert seconds value to time string format
  end

end
