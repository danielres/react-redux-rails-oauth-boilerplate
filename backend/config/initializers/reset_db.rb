DatabaseCleaner.strategy = :truncation
DatabaseCleaner.clean if(ENV['RESET_DB'] == 'true')
